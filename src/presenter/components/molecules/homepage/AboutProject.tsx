import { useNavigate } from 'react-router';
import { aboutBanner } from '../../../assets';
import Button from '../../atoms/buttons/Button';

export default function AboutProject() {
  const navigate = useNavigate();
  return (
    <section className="mt-[61px] flex justify-between max-1050:items-center max-700:mt-[31px] max-700:flex-col">
      <div className="w-full flex-1">
        <h2 className="text-title-sm font-bold text-charcoalGrey max-850:text-subtitle max-500:text-body">
          პროექტის შესახებ
        </h2>
        <p className="mt-[28px] flex w-full max-w-[437px] flex-col text-body-md leading-[1.8] text-charcoalGrey max-850:mt-4 max-800:text-[13px] max-700:max-w-full max-500:mt-2.5 max-500:text-body-sm">
          სარკვევი განკუთვნილია საბაკალავრო საფეხურის სტუდენტებისათვის,
          რომლებსაც ეკითხებათ სასწავლო კურსი „ბოტანიკა“, ასევე ბოტანიკით
          დაინტერესებული მაგისტრანტების, დოქტორანტების, მკვლევარებისა და
          მოყვარული ბოტანიკოსებისათვის, რომლებსაც აქვთ სურვილი მცენარეთა
          ოჯახების რკვევის პრაქტიკულ უნარ-ჩვევებს დაეუფლონ.
        </p>
        <Button
          label="სრულად"
          clasname="mt-6 max-700:mx-auto max-500:h-[40px] max-500:text-[14px] max-450:w-full max-450:rounded-[6px]"
          variant="secondary"
          onclick={() => navigate('/about-project')}
        />
      </div>
      <div className="w-[580px] max-1050:w-[450px] max-900:w-[400px] max-800:w-[350px] max-700:mt-[23px] max-450:w-full max-450:px-5">
        <img src={aboutBanner} className="w-full" alt="about-project" />
      </div>
    </section>
  );
}
