import { RxCross1, RxZoomIn, RxZoomOut } from 'react-icons/rx';
import { TbZoomReplace } from 'react-icons/tb';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { useGetPlant } from '../../../../api/use-get-plant';
import { ImageZoomModalProps } from '../../../../types';
import Loader from '../../atoms/loader/Loader';

const zoomButtons = [
  {
    icon: <RxZoomIn color="white" size={25} />,
    action: (zoomIn: () => void) => zoomIn(),
  },
  {
    icon: <RxZoomOut color="white" size={25} />,
    action: (zoomOut: () => void) => zoomOut(),
  },
  {
    icon: <TbZoomReplace color="white" size={25} />,
    action: (resetTransform: () => void) => resetTransform(),
  },
];

const ImageZoomModal = ({ onClose }: ImageZoomModalProps) => {
  const { data: plant, isLoading } = useGetPlant();

  if (isLoading) return <Loader />;
  if (!plant) return <div>ვერ მოიძებნა</div>;

  const plantImg = plant.image
    ? `https://tpk.iliauni.edu.ge/static/${plant.image}`
    : '/assets/webp/plant.svg';
  return (
    <div className="relative z-10 min-h-[700px] w-full max-w-[1170px] overflow-hidden rounded-[11px] border border-[#13C296] bg-white shadow-2xl max-750:min-h-[450px] max-400:min-h-[400px]">
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform }) => {
          const handlers = [zoomIn, zoomOut, resetTransform];

          return (
            <>
              <div className="flex justify-end border-b bg-[#0EA580] shadow-md">
                <button
                  className="flex h-[50px] w-[50px] items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#64dfc0ad]"
                  onClick={onClose}
                >
                  <RxCross1 color="white" size={25} />
                </button>
              </div>
              <div className="m-auto flex h-full w-full justify-center gap-[20px] p-[20px] max-750:min-h-[600px] max-750:flex-col max-750:items-center max-750:justify-between max-750:p-[15px] max-450:p-[5px]">
                <div className="flex min-h-[600px] w-full max-w-[450px] cursor-grab items-center justify-center border active:cursor-grabbing max-600:min-h-[450px] max-600:max-w-[350px]">
                  <TransformComponent>
                    <img
                      src={plantImg}
                      alt="Zoomed plant"
                      className="h-full min-h-[600px] w-full max-w-[450px] object-contain max-750:min-h-[500px] max-600:min-h-[450px]"
                    />
                  </TransformComponent>
                </div>
                <div className="flex flex-col gap-4 max-750:flex-row">
                  {zoomButtons.map((btn, index) => (
                    <button
                      key={index}
                      className="flex h-[45px] w-[45px] items-center justify-center rounded-[5px] bg-[#0EA580] transition-all duration-300 ease-in-out hover:bg-[#64dfc0f2]"
                      onClick={() => btn.action(handlers[index])}
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            </>
          );
        }}
      </TransformWrapper>
    </div>
  );
};

export default ImageZoomModal;
