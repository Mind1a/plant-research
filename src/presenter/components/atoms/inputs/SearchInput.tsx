import { useState } from 'react';
import { cancelIcon, searchIcon } from '../../../assets';
import { cn } from '../../../../lib/utils';

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
        onChange={(e) => setSearch(e.target.value)}
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
            onClick={() => setSearch('')}
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
