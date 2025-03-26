import { useGetPlant } from '../../../../api/use-get-plant';
import { downloadIcon, search2Icon } from '../../../assets';
import IconBtn from '../../atoms/buttons/IconBtn';
import Loader from '../../atoms/loader/Loader';

export default function PlantData() {
  const { data: plant, isLoading } = useGetPlant();

  if (isLoading) return <Loader />;
  if (!plant) return <div>ვერ მოიძებნა</div>;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/webp/plant.png';
    link.download = plant.eng_name || 'plant';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-[42px] max-650:mt-[38px]">
      <h2 className="text-title-sm font-bold text-charcoalGrey max-750:text-[24px] max-650:text-[16px]">
        {plant.family_name} - {plant.family_name_geo}
      </h2>
      <section className="mt-6 flex w-full gap-12 max-950:gap-8 max-750:gap-6 max-650:flex-col-reverse">
        <div className="flex w-[500px] flex-col max-950:w-[400px] max-750:w-[260px] max-650:mx-auto max-650:w-[450px] max-650:flex-col-reverse max-500:w-full">
          <div className="plantDataHeight relative w-full rounded-[11px] border border-primary">
            <img
              src="/assets/webp/plant.png"
              className="h-full w-full rounded-[11px] object-cover"
              alt={plant.eng_name}
            />
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
              <IconBtn imgSrc={downloadIcon} onclick={handleDownload} />
              <IconBtn imgSrc={search2Icon} />
            </div>
          </div>
          <div className="mt-1.5 flex w-full gap-1 max-650:mb-1.5">
            <p className="w-full truncate text-[14px] italic text-charcoalGrey">
              {plant.name} / {plant.eng_name}
            </p>
          </div>
        </div>
        <div className="plantDataHeight flex-1 overflow-y-auto">
          <p className="h-full leading-[200%] max-950:text-[15px] max-750:text-[14px] max-650:text-[12px]">
            {plant.description}
          </p>
        </div>
      </section>
    </div>
  );
}
