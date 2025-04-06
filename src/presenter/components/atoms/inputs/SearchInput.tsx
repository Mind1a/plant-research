import { useState } from 'react';
import { cancelIcon, searchIcon } from '../../../assets';
import { cn } from '../../../../lib/utils';
import { useNavigate } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput({
  classname,
  placeholder = 'ძებნა...',
  variant = 'primary',
}: {
  classname?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
}) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams();
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    navigate(`?${params.toString()}`);
  }, 350);
  return (
    <div className="relative flex w-full items-center">
      <input
        type="search"
        className={cn(
          `h-12 rounded-md border border-transparent bg-lightGreen font-medium text-primary outline-none transition-all duration-300 placeholder:text-primary focus:border-primary focus:outline-none`,
          classname,
          variant === 'primary' ? 'w-[270px] pl-5 pr-11' : 'w-full pl-11 pr-5'
        )}
        value={search}
        placeholder={placeholder}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <div
        className={cn(
          `absolute cursor-pointer`,
          variant === 'primary' ? 'right-[20px]' : 'left-[20px]'
        )}
      >
        {search.length > 0 ? (
          <img
            className="h-5 w-5"
            onClick={() => {
              setSearch('');
              handleSearch('');
            }}
            src={cancelIcon}
            alt="cancel"
          />
        ) : (
          <img className="h-4 w-4" src={searchIcon} alt="search" />
        )}
      </div>
    </div>
  );
}
