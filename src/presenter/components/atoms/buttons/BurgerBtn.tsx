export default function BurgerBtn({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick: () => void;
}) {
  return (
    <button
      onClick={onclick}
      className="bg-lightGreen btnUnset flex h-10 w-10 items-center justify-center rounded-md"
    >
      {children}
    </button>
  );
}
