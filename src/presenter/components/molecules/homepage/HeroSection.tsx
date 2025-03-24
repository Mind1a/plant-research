import { useNavigate } from 'react-router';
import { heroBanner, rightArrow } from '../../../assets';
import Button from '../../atoms/buttons/Button';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[480px] w-full rounded-[12px] max-950:h-[400px] max-850:h-[310px] max-600:h-[250px] max-450:h-[178px]">
      <img
        src={heroBanner}
        alt="hero"
        className="h-full w-full rounded-[12px] object-cover"
      />
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-[98px] py-[78px] max-1200:px-[50px] max-1200:py-[40px] max-600:p-6 max-450:p-5">
        <h2 className="pb-4 text-[60px] font-bold leading-[1.3] text-white max-1150:text-[50px] max-950:text-[42px] max-850:pb-10 max-850:text-[32px] max-600:pb-5 max-600:text-[26px] max-450:text-[18px]">
          თბილისის მიდამოების ფლორის ოჯახების სარკვევი
        </h2>
        <p className="pb-4 text-[14px] font-[400] leading-[1.8] text-white max-950:text-[13px] max-850:hidden">
          ფოთლები არასდროს მწვანე არ არის, ქერქლოვანია, თავდაკბილულ ვაგინებად
          შეზრდილი და ღეროზე შემოხვეული. ღერო კარგად გამოსახული მრავალი
          მუხლთაშორისითაა, მწვანეა და რგოლურად დატოტვილი ან მკრთალია და მარტივი.
          ღერო კარგად გამოსახული მრავალი მუხლთაშორისითაა, მწვანეა და რგოლურად
          დატოტვილი ან მკრთალია და მარტივი. ღერო კარგად გამოსა
        </p>
        <Button
          onclick={() => navigate('/sarkvevi')}
          label="გაიგე მეტი"
          clasname="max-450:text-[12px] max-450:h-[36px] max-450:px-2 max-450:gap-2"
        >
          <img
            src={rightArrow}
            className="h-[17px] w-[17px] max-450:h-[15px] max-450:w-[15px]"
            alt="icon"
          />
        </Button>
      </div>
    </section>
  );
}
