import PageWrapper from '../components/atoms/PageWrapper';
import SarkveviHeader from '../components/molecules/sarkvevipage/SarkveviHeader';

export default function Sarkvevi() {
  return (
    <main>
      <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px]">
        <SarkveviHeader />
      </PageWrapper>
    </main>
  );
}
