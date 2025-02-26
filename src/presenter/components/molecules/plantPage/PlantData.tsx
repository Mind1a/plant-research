import { useGetPlant } from '../../../../api/use-get-plant';
import Loader from '../../atoms/loader/Loader';

export default function PlantData() {
  const { data: plant, isLoading } = useGetPlant();

  if (isLoading) return <Loader />;
  if (!plant) return <div>ვერ მოიძებნა</div>;

  return (
    <div className="mt-[42px]">
      <h2 className="text-title-sm font-bold text-charcoalGrey">
        Rutaceae - ტეგანისებრნი
      </h2>
      <section className="mt-6 flex h-[630px] w-full gap-12">
        <div className="w-[500px]">
          <div className="h-[600px] w-full rounded-[11px] border border-primary">
            <img
              src="/assets/webp/plant.png"
              className="h-full w-full rounded-[11px] object-cover"
              alt={plant.eng_name}
            />
          </div>
          <div className="mt-1.5 flex w-full gap-1">
            <p className="w-full truncate text-[14px] italic text-charcoalGrey">
              {plant.lat_name} / {plant.eng_name} zzzzz
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <p className="h-full leading-[200%]">
            გოგრისებრნი (ლათ. Cucurbitaceae) — ორლებნიან მცენარეთა ოჯახი.
            ერთწლოვანი, ზოგჯერ მრავალწლოვანი გართხმული ან მცოცავი ბალახები,
            იშვიათად ბუჩქები და პატარა ხეებია. აქვთ ხუთწევრიანი, უფრო ხშირად
            ერთსქესიანი, ფურცლებშეზრდილი ყვავილები; ქვედა სამბუდიანი ნასკვი,
            ერთი მოკლე, სამი ნალისებრი დინგით დაბოლოებული სვეტი; უმეტესად
            მრავალთესლიანი გოგრულა ნაყოფი.  ცნობილია 90-მდე გვარი და 760-მდე
            სახეობა. გავრცელებულია ძირითადად ტროპიკებში. საქართველოში მხოლოდ 2
            გვარი — ლეშურა და კიტრანა იზრდება. სამეურნეო მნიშვნელობისაა კიტრი,
            ნესვი, გოგრა, საზამთრო, აყირო, ლუფა, კოლოქვინტი. ზოგი გოგრისებრნი
            მაგ. ტლანდიანტა, დეკორატიულია.
          </p>
        </div>
      </section>
    </div>
  );
}
