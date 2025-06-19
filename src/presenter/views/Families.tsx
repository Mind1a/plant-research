import PageWrapper from '../components/atoms/PageWrapper';
import Pagination from '../components/atoms/pagination';
import FamiliesGrid from '../components/molecules/familiesPage/FamiliesGrid';
import FamiliesHeader from '../components/molecules/familiesPage/FamiliesHeader';

export default function Families() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px] flex-1 flex flex-col">
      <FamiliesHeader />
      <FamiliesGrid />
      <Pagination />
    </PageWrapper>
  );
}
