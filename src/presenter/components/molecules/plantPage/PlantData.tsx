import { useState } from 'react';
import { useGetPlant } from '../../../../api/use-get-plant';
import { downloadIcon, search2Icon } from '../../../assets';
import IconBtn from '../../atoms/buttons/IconBtn';
import Loader from '../../atoms/loader/Loader';
import ImageZoomModal from '../imageZoomModal/ImageZoomModal';

export default function PlantData() {
  const [isZoom, setIsZoom] = useState(false);

  const zoomWindow = () => {
    setIsZoom((prev) => !prev);
  };

  const { data: plant, isLoading } = useGetPlant();

  console.log(plant);

  if (isLoading) return <Loader />;
  if (!plant) return <div>ვერ მოიძებნა</div>;

  const handleDownload = () => {
    const plantImg = plant.image
      ? `https://tpk.iliauni.edu.ge/static/${plant.image}`
      : '/assets/webp/plant.svg';
    const link = document.createElement('a');
    link.href = plantImg;
    link.target = '_blank';
    link.download = plant.eng_name || 'plant';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const plantImg = plant.image
    ? `https://tpk.iliauni.edu.ge/static/${plant.image}`
    : '/assets/webp/plant.svg';
  return (
    <div className="mt-[42px] max-650:mt-[38px]">
      {isZoom ? (
        <>
          <div
            className="z-9 fixed inset-0 bg-black bg-opacity-60"
            onClick={() => setIsZoom(false)}
          />
          <ImageZoomModal onClose={() => setIsZoom(false)} />
        </>
      ) : (
        <>
          <h2 className="text-title-sm font-bold text-charcoalGrey max-750:text-[24px] max-650:text-[16px]">
            {plant.eng_name} - {plant.name}
          </h2>
          <section className="mt-6 flex w-full gap-12 max-950:gap-8 max-750:gap-6 max-650:flex-col-reverse">
            <div className="flex w-[500px] flex-col max-950:w-[400px] max-750:w-[260px] max-650:mx-auto max-650:w-[450px] max-650:flex-col-reverse max-500:w-full">
              <div className="plantDataHeight relative w-full rounded-[11px]">
                <img
                  src={plantImg}
                  className="h-full w-full rounded-[11px] object-cover"
                  alt={plant.eng_name}
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
                  <IconBtn imgSrc={downloadIcon} onclick={handleDownload} />
                  <IconBtn imgSrc={search2Icon} onclick={zoomWindow} />
                </div>
              </div>
              <div className="mt-1.5 flex w-full gap-1 max-650:mb-1.5">
                <p className="w-full truncate text-[14px] italic text-charcoalGrey">
                  {plant.family_name} / {plant.family_name_geo}
                </p>
              </div>
            </div>
            <div className="plantDataHeight flex-1 overflow-y-auto">
              <p className="h-full leading-[200%] max-950:text-[15px] max-750:text-[14px] max-650:text-[12px]">
                {plant.description && plant.description}
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
