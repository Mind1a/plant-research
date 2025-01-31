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
      aria-label="burger button"
      className={cn(
        `btnUnset flex h-10 w-10 items-center justify-center rounded-md bg-lightGreen transition-all duration-300`,
        isOpen && 'bg-primary'
      )}
    >
      {children}
    </button>
  );
}
