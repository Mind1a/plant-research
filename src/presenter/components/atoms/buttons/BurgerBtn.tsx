import { cn } from '../../../../lib/utils';

export default function BurgerBtn({
  children,
  onclick,
  isOpen,
}: {
  children: React.ReactNode;
  onclick: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      onClick={onclick}
      className={cn(
        `bg-lightGreen btnUnset flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300`,
        isOpen && 'bg-primary'
      )}
    >
      {children}
    </button>
  );
}
