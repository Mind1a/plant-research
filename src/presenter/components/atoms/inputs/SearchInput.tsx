import { useState } from 'react';
import { cancelIcon, searchIcon } from '../../../assets';
import { cn } from '../../../../lib/utils';

export default function SearchInput({ classname }: { classname?: string }) {
  const [search, setSearch] = useState('');
  return (
    <div className="relative flex items-center">
      <input
        type="search"
        className={cn(
          `h-12 w-[270px] rounded-md border border-transparent bg-lightGreen pl-5 pr-11 font-medium text-primary outline-none transition-all duration-300 placeholder:text-primary focus:border-primary focus:outline-none`,
          classname
        )}
        value={search}
        placeholder="ძებნა..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute right-[20px] cursor-pointer">
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
