import PageWrapper from '../components/atoms/PageWrapper';
import FamiliesHeader from '../components/molecules/familiesPage/FamiliesHeader';

export default function Families() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px]">
      <FamiliesHeader />
    </PageWrapper>
  );
}
