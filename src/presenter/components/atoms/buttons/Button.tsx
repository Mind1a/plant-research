import { cn } from '../../../../lib/utils';

export default function Button({
  label,
  onclick,
  variant = 'primary',
  clasname,
  children,
  iconPosition = 'right',
}: {
  label: string;
  onclick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  clasname?: string;
  children?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}) {
  return (
    <button
      onClick={onclick}
      className={cn(
        `tranastion-all flex h-12 items-center justify-center gap-2.5 rounded-[10px] border border-transparent duration-300 font-case`,
        clasname,
        variant === 'primary' &&
          'bg-primary px-[18px] text-white hover:bg-[#00B083]',
        variant === 'secondary' &&
          'border-primary bg-lightGreen px-[18px] text-primary hover:border-transparent hover:bg-[#077A5D] hover:text-white',
        variant === 'tertiary' &&
          'border-primary bg-transparent px-[18px] text-primary hover:bg-primary hover:text-white',
        variant === 'quaternary' && 'bg-[#00000004] px-[24px] text-lightBlack'
      )}
    >
      {iconPosition === 'left' && children}
      {label}
      {iconPosition === 'right' && children}
    </button>
  );
}
