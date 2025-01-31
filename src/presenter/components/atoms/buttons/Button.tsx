import { cn } from '../../../../lib/utils';

export default function Button({
  label,
  onclick,
  variant = 'primary',
  clasname,
  children,
}: {
  label: string;
  icon?: string;
  onclick?: () => void;
  variant?: 'primary';
  clasname?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onclick}
      className={cn(
        `font-case tranastion-all flex h-12 items-center gap-2.5 rounded-[10px] duration-300`,
        clasname,
        variant === 'primary' &&
          'bg-primary px-[18px] text-white hover:bg-[#00B083]'
      )}
    >
      {label}
      {children}
    </button>
  );
}
