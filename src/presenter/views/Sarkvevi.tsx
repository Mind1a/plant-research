import PageWrapper from '../components/atoms/PageWrapper';
import SarkveviHeader from '../components/molecules/sarkvevipage/SarkveviHeader';
import SarkveviInstruction from '../components/molecules/sarkvevipage/SarkveviInstruction';

export default function Sarkvevi() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px]">
      <SarkveviHeader />
      <SarkveviInstruction />
    </PageWrapper>
  );
}
