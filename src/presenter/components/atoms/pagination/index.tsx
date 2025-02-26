import { useNavigate, useSearchParams } from 'react-router';
import { chevronLeftIcon, chevronRightIcon } from '../../../assets';
import PaginationBtn from '../buttons/PaginationBtn';
import { useEffect, useState } from 'react';
import { usePageNumbers } from '../../../../hooks/use-page-numbers';

export default function Pagination() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const [pageIndex, setPageIndex] = useState(currentPage);
  const navigate = useNavigate();

  useEffect(() => {
    setPageIndex(currentPage);
  }, [currentPage]);

  const totalPages = 16;

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    navigate(`?${params.toString()}`);
    setPageIndex(page);
  };

  const { pages } = usePageNumbers({ totalPages, pageIndex });
  return (
    <div className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-[10px] border border-strokeGrey bg-white p-3 max-450:gap-1.5 max-450:p-1.5">
      <PaginationBtn
        onclick={() => onPageChange(Number(pageIndex) - 1)}
        imgSrc={chevronLeftIcon}
        disabled={Number(pageIndex) <= 1}
        variant="tertiary"
      />

      <div className="flex items-center gap-2 max-450:gap-1.5">
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <PaginationBtn
              key={index}
              label={page.toString()}
              onclick={() => onPageChange(page)}
              variant={pageIndex === page ? 'primary' : 'secondary'}
            />
          ) : (
            <PaginationBtn key={index} label="..." variant="quaternary" />
          )
        )}
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
