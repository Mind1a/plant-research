import SearchInput from '../../atoms/inputs/SearchInput';
import SortDropdown from '../../atoms/sort';

export default function FamiliesHeader() {
  return (
    <div className="relative flex items-center justify-between gap-5">
      <div className="max-w-[239px] flex-1">
        <SearchInput
          classname="max-750:h-[40px]"
          variant="secondary"
          placeholder="ოჯახის ძებნა"
        />
      </div>

      <SortDropdown />
    </div>
  );
}
