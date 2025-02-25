import { useNavigate, useSearchParams } from 'react-router';
import { chevronLeftIcon, chevronRightIcon } from '../../../assets';
import PaginationBtn from '../buttons/PaginationBtn';

import { useState } from 'react';

export default function Pagination() {
  const [searchParams] = useSearchParams();
  const [pageIndex, setPageIndex] = useState(searchParams.get('page') || 1);
  const navigate = useNavigate();

  const totalPages = 5;

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    navigate(`?${params.toString()}`);
    setPageIndex(page);
  };


  
  return (
    <div className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-[10px] border border-strokeGrey bg-white p-3">
      <PaginationBtn
        onclick={() => onPageChange(Number(pageIndex) - 1)}
        imgSrc={chevronLeftIcon}
        disabled={Number(pageIndex) <= 1}
        variant="tertiary"
      />

      <div className="flex items-center gap-2">
        {[...Array(totalPages).keys()].map((page) => (
          <PaginationBtn
            key={page}
            label={(page + 1).toString()}
            onclick={() => onPageChange(page + 1)}
            variant={Number(pageIndex) === page + 1 ? 'primary' : 'secondary'}
          />
        ))}
      </div>

      <PaginationBtn
        onclick={() => onPageChange(Number(pageIndex) + 1)}
        disabled={Number(pageIndex) >= totalPages}
        imgSrc={chevronRightIcon}
        variant="tertiary"
      />
    </div>
  );
}
