import PageWrapper from '../components/atoms/PageWrapper';
import AboutProject from '../components/molecules/homepage/AboutProject';
import HeroSection from '../components/molecules/homepage/HeroSection';

export default function Home() {
  return (
    <PageWrapper classname="my-[72px] max-1000:my-[42px] max-500:my-[27px]">
      <HeroSection />
      <AboutProject />
    </PageWrapper>
  );
}
