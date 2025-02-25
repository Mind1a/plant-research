import { chevronLeftIcon, chevronRightIcon } from '../../../assets';
import PaginationBtn from '../buttons/PaginationBtn';

export default function Pagination() {
  return (
    <div className="flex w-fit items-center justify-center gap-2 rounded-[10px] border border-strokeGrey bg-white p-3">
      <PaginationBtn imgSrc={chevronLeftIcon} variant="tertiary" />

      <PaginationBtn label="1" variant="primary" />
      <PaginationBtn label="1" variant="secondary" />
      <PaginationBtn imgSrc={chevronRightIcon} variant="tertiary" />
    </div>
  );
}
