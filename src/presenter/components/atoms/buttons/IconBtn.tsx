export default function IconBtn({
  imgSrc,
  onclick,
}: {
  imgSrc: string;
  onclick?: () => void;
}) {
  return (
    <button
      onClick={onclick}
      className="flex h-[42px] w-[42px] items-center justify-center rounded-md bg-primary transition-all duration-300 hover:bg-[#00B083]"
    >
      <img src={imgSrc} className="h-[22px] w-[22px]" alt="button" />
    </button>
  );
}
