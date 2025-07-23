import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { usePlants } from '../../../../api/use-get-plants';
import { usePageNumbers } from '../../../../hooks/use-page-numbers';
import { chevronLeftIcon, chevronRightIcon } from '../../../assets';
import PaginationBtn from '../buttons/PaginationBtn';

export default function Pagination() {
  const navigate = useNavigate();
  const { data } = usePlants();
  const [searchParams] = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const currentPage = data?.pagination.currentPage;
  const totalPages = data?.pagination.totalPages || 1;

  const onPageChange = (page: number) => {
    params.set('page', page.toString());
    navigate(`?${params.toString()}`);
  };

  const { pages } = usePageNumbers({ totalPages, currentPage });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-[10px] border border-strokeGrey bg-white p-3 max-450:gap-1.5 max-450:p-1.5">
      <PaginationBtn
        onclick={() => onPageChange(Number(currentPage) - 1)}
        imgSrc={chevronLeftIcon}
        disabled={Number(currentPage) <= 1}
        variant="tertiary"
      />

      <div className="flex items-center gap-2 max-450:gap-1.5">
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <PaginationBtn
              key={index}
              label={page.toString()}
              onclick={() => onPageChange(page)}
              variant={currentPage === page ? 'primary' : 'secondary'}
            />
          ) : (
            <PaginationBtn key={index} label="..." variant="quaternary" />
          )
        )}
      </div>

      <PaginationBtn
        onclick={() => onPageChange(Number(currentPage) + 1)}
        disabled={currentPage >= totalPages}
        imgSrc={chevronRightIcon}
        variant="tertiary"
      />
    </div>
  );
}
