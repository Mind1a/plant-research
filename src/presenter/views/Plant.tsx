import PageWrapper from '../components/atoms/PageWrapper';
import PlantData from '../components/molecules/plantPage/PlantData';
import PlantHeader from '../components/molecules/plantPage/PlantHeader';

export default function Plant() {
  return (
    <PageWrapper classname="my-[72px]  max-1000:my-[42px] max-500:my-[27px]">
      <PlantHeader />
      <PlantData />
    </PageWrapper>
  );
}
