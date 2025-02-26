import { useGetPlant } from '../../../../api/use-get-plant';

export default function PlantData() {
  const { data } = useGetPlant();

  return (
    <div className="mt-[42px]">
      <div></div>
    </div>
  );
}
