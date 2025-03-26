import { usePlants } from '../../../../api/use-get-plants';
import { Plant } from '../../../../types';
import Loader from '../../atoms/loader/Loader';
import FamilieCard from './FamilieCard';

export default function FamiliesGrid() {
  const { data, isLoading } = usePlants();
  return (
    <section className="my-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-5 gap-8 !gap-y-[30px] max-1100:gap-4 max-1000:grid-cols-4 max-850:gap-2.5 max-650:grid-cols-3 max-650:!gap-y-[20px] max-450:grid-cols-2 max-450:!gap-y-[15px]">
          {data?.plants.map((plant: Plant, i: number) => (
            <FamilieCard key={plant?.id || i} data={plant} />
          ))}
        </div>
      )}
    </section>
  );
}
