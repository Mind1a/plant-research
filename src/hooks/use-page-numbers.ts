import { useDeviceSize } from '../context/DeviseSizeProvider';

export const usePageNumbers = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const deviceSize = useDeviceSize();
  const pages: (number | string)[] = [];
  const maxVisiblePages = deviceSize === 'xl' ? 4 : 2;

  if (totalPages <= 7) {
    return { pages: Array.from({ length: totalPages }, (_, i) => i + 1) };
  }

  if (currentPage <= maxVisiblePages) {
    pages.push(
      ...Array.from({ length: maxVisiblePages }, (_, i) => i + 1),
      '...',
      totalPages
    );
  } else if (currentPage >= totalPages - maxVisiblePages + 1) {
    pages.push(
      1,
      '...',
      ...Array.from(
        { length: maxVisiblePages },
        (_, i) => totalPages - maxVisiblePages + i + 1
      )
    );
  } else {
    pages.push(
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages
    );
  }

  return { pages };
};
