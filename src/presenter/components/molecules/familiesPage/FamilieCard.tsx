import { useNavigate } from 'react-router';
import { Plant } from '../../../../types';

export default function FamilieCard({ data }: { data: Plant }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/plant/${data.id}`)}
      className="group w-full cursor-pointer"
    >
      <div className="h-[277px] rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary">
        <img
          src="/assets/webp/plant.png"
          className="h-full w-full rounded-xl"
          alt={data.name}
        />
      </div>
      <div>
        <h3 className="text-body font-medium text-charcoalGrey">
          {data.eng_name}
        </h3>
        <h4 className="text-body font-medium text-charcoalGrey">
          {data.lat_name}
        </h4>
      </div>
    </div>
  );
}
