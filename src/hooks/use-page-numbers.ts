import { useDeviceSize } from '../context/DeviseSizeProvider';

export const usePageNumbers = ({
  totalPages,
  pageIndex,
}: {
  totalPages: number;
  pageIndex: number;
}) => {
  const deviceSize = useDeviceSize(); // Now it's inside a hook
  const pages: (number | string)[] = [];
  const maxVisiblePages = deviceSize === 'xl' ? 4 : 2;

  if (totalPages <= 7) {
    return { pages: Array.from({ length: totalPages }, (_, i) => i + 1) };
  }

  if (pageIndex <= maxVisiblePages) {
    pages.push(
      ...Array.from({ length: maxVisiblePages }, (_, i) => i + 1),
      '...',
      totalPages
    );
  } else if (pageIndex >= totalPages - maxVisiblePages + 1) {
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
      pageIndex - 1,
      pageIndex,
      pageIndex + 1,
      '...',
      totalPages
    );
  }

  return { pages };
};
