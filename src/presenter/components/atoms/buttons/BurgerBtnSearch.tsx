import { useState, useEffect, useRef } from 'react';
import { cn } from '../../../../lib/utils';
import { cancelIcon, searchIcon } from '../../../assets';

export default function BurgerBtnSearch({
  children,
  onclick,
  onblur,
  isOpen,
}: {
  children: React.ReactNode;
  onclick: () => void;
  onblur: () => void;
  isOpen: boolean;
}) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onblur();
    }
  };

  return (
    <>
      <button
        onClick={onclick}
        className={cn(
          `btnUnset relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-lightGreen transition-all duration-300`,
          isOpen && '!w-[294px]'
        )}
        aria-label="Toggle Search"
        title="Toggle Search"
      >
        <div
          onBlur={handleBlur}
          tabIndex={-1}
          className={cn(
            `absolute inset-0 flex items-center transition-all duration-0`,
            isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          )}
        >
          <input
            ref={inputRef}
            type="search"
            className={cn(
              `h-full w-full rounded-md border border-transparent bg-lightGreen pl-5 pr-11 font-medium text-primary outline-none transition-all duration-300 placeholder:text-primary focus:border-primary focus:outline-none`
            )}
            value={search}
            placeholder="ძებნა..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer">
            {search.length > 0 ? (
              <img
                className="h-5 w-5"
                onClick={() => setSearch('')}
                src={cancelIcon}
                alt="cancel"
              />
            ) : (
              <img className="h-4 w-4" src={searchIcon} alt="search" />
            )}
          </div>
        </div>

        <div
          className={cn(
            `absolute right-[12px] transition-opacity duration-0`,
            isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
          )}
        >
          {children}
        </div>
      </button>
      {isOpen && (
        <div className="fixed left-0 top-[64px] z-[1] h-full w-full bg-black opacity-50"></div>
      )}
    </>
  );
}
