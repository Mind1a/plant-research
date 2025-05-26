import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router';
const QuestionHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-[52px]">
      <Button
        onclick={() => navigate('/')}
        clasname="px-[24px] max-450:px-[44px] max-450:text-[14px] max-750:text-[13px] max-750:max-h-[40px] max-750:px-[20px] max-750:text-[13px]"
        label="უკან"
      />
      <Button
        onclick={() => navigate('/')}
        clasname="max-750:px-[20px] max-750:text-[13px] max-750:max-h-[40px] max-450:px-[44px] max-450:text-[12px]"
        variant="quaternary"
        label="თავიდან დაწყება"
      />
    </div>
  );
};

export default QuestionHeader;
