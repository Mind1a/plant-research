import { useNavigate } from 'react-router';
import { rightArrow } from '../../../assets';
import Button from '../../atoms/buttons/Button';

export default function SarkveviHeader() {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-title-sm font-bold leading-[1.5] text-charcoalGrey max-1000:text-subtitle max-450:text-[16px]">
        სარკვევი
      </h2>
      <p className="mt-6 w-full text-[14px] !leading-[1.8] text-charcoalGrey max-1000:mt-[12px]">
        სარკვევი განკუთვნილია საბაკალავრო საფეხურის სტუდენტებისათვის, რომლებსაც
        ეკითხებათ სასწავლო კურსი „ბოტანიკა“, ასევე ბოტანიკით დაინტერესებული
        მაგისტრანტების, დოქტორანტების, მკვლევარებისა და მოყვარული
        ბოტანიკოსებისათვის, რომლებსაც აქვთ სურვილი მცენარეთა ოჯახების რკვევის
        პრაქტიკულ უნარ-ჩვევებს დაეუფლონ.
      </p>
      <Button
        onclick={() => navigate('/')}
        label="ᲓᲐᲬᲧᲔᲑᲐ"
        clasname="mt-8 max-1000:h-[42px] max-1000:text-[13.5px] max-1000:gap-2 max-1000:px-4 max-450:w-full max-450:text-center"
      >
        <img
          src={rightArrow}
          className="h-[17px] w-[17px] max-1000:h-[15px] max-1000:w-[15px]"
          alt="icon"
        />
      </Button>
    </section>
  );
}
