import { cn } from '../../../../lib/utils';

export default function PaginationBtn({
  label,
  onclick,
  variant = 'primary',
  imgSrc,
  disabled,
}: {
  label?: string;
  onclick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  imgSrc?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={cn(
        `flex h-10 w-10 items-center justify-center rounded-md border border-transparent duration-300 font-case`,
        variant === 'primary' && 'bg-primary text-white hover:bg-[#00B083]',
        variant === 'secondary' &&
          'border-strokeGrey bg-transparent text-lightBlack hover:border-primary',
        variant === 'tertiary' &&
          'h-8 w-8 border-strokeGrey bg-transparent text-lightBlack hover:border-primary',
        disabled && 'cursor-not-allowed opacity-50'
      )}
    >
      {variant === 'tertiary' ? (
        <img src={imgSrc} className="w-2" alt="icon" />
      ) : (
        label
      )}
    </button>
  );
}
