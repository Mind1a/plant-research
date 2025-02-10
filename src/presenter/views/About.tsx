import PageWrapper from '../components/atoms/PageWrapper';
import AboutProjectSection from '../components/molecules/aboutProjectPage/AboutProjectSection';

export default function About() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px] p-0">
      <AboutProjectSection />
    </PageWrapper>
  );
}
