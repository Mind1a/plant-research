import { Plant } from '../../../../types';
import FamilieCard from './FamilieCard';

const plantData: Plant = {
  id: 1,
  name: 'Kalanchoe',
  eng_name: 'Kalanchoe',
  lat_name: 'eohcnalaK',
  image: 'kalanchoe_image.jpg',
};
export default function FamiliesGrid() {
  return (
    <section className="my-4 grid grid-cols-5 gap-8">
      <FamilieCard data={plantData} />
      <FamilieCard data={plantData} />

      <FamilieCard data={plantData} />
      <FamilieCard data={plantData} />
      <FamilieCard data={plantData} />
    </section>
  );
}
