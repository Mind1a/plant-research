import SearchInput from '../../atoms/inputs/SearchInput';
import SortDropdown from '../../atoms/sort';

export default function FamiliesHeader() {
  return (
    <div className="flex items-center justify-between">
      <SearchInput variant="secondary" placeholder="ოჯახის ძებნა" />
      <SortDropdown />
    </div>
  );
}
