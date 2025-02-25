import { useNavigate } from 'react-router';
import { Plant } from '../../../../types';

export default function FamilieCard({ data }: { data: Plant }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/plant/${data.id}`)}
      className="group w-full cursor-pointer"
    >
      <div className="h-[277px] rounded-xl border-2 border-transparent shadow-sm transition-colors duration-300 group-hover:border-primary max-900:h-[244px] max-800:h-[188px] max-500:h-[159px]">
        <img
          src="/assets/webp/plant.png"
          className="h-full w-full rounded-xl object-cover"
          alt={data.name}
        />
      </div>
      <div className="mt-2">
        <h3 className="text-body font-medium text-charcoalGrey max-900:text-[14px]">
          {data.eng_name}
        </h3>
        <h4 className="text-body font-medium text-charcoalGrey max-900:text-[14px]">
          {data.lat_name}
        </h4>
      </div>
    </div>
  );
}
