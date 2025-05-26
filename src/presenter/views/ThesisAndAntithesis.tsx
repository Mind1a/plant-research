import PageWrapper from '../components/atoms/PageWrapper';
import QuestionHeader from '../components/molecules/ThesisAndAntithesisPage/QuestionHeader';
import Questions from '../components/molecules/ThesisAndAntithesisPage/Questions';

export default function ThesisAndAntithesis() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px] p-0">
      <QuestionHeader />
      <Questions />
    </PageWrapper>
  );
}
