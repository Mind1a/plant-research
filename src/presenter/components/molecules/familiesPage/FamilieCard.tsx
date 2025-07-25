import { useNavigate } from 'react-router';

import { Plant } from '../../../../types';

export default function FamilieCard({ data }: { data: Plant }) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const navigate = useNavigate();
  const plantImg = data.image
    ? `https://tpk.iliauni.edu.ge/static/${data.image}`
    : '/assets/webp/plant.svg';
  return (
    <div
      onClick={() => navigate(`/plant/${data.id}`)}
      className="group w-full cursor-pointer"
    >
      <div
        className="h-[277px] rounded-xl border-2 border-transparent shadow-sm transition-colors duration-300 group-hover:border-primary max-900:h-[244px] max-800:h-[188px] max-500:h-[159px]"
        style={{ boxShadow: '0 10px 20px 0 #5C73A012' }}
      >
        <img
          src={plantImg}
          className="h-full w-full rounded-xl object-cover"
          alt={data.name}
        />
      </div>
      <div className="mt-2">
        <h3 className="text-body font-medium text-charcoalGrey max-900:text-[14px]">
          {truncateText(data.eng_name, 16)}
        </h3>
        <h4 className="text-body font-medium text-charcoalGrey max-900:text-[14px]">
          {truncateText(data.name, 16)}
        </h4>
      </div>
    </div>
  );
}
