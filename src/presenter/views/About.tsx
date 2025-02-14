import PageWrapper from '../components/atoms/PageWrapper';
import AboutProjectSection from '../components/molecules/aboutProjectPage/AboutProjectSection';
import WorkingTeamSection from '../components/molecules/aboutProjectPage/WorkingTeamSection';

export default function About() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px] p-0 max-1000:px-[77px] max-700:px-[24px]">
      <AboutProjectSection />
      <WorkingTeamSection />
    </PageWrapper>
  );
}
