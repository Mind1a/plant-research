import Button from '../../atoms/buttons/Button';

type QuestionButtonsProps = {
  backButton: () => void;
  resetButton: () => void;
};

const QuestionButtons = ({ backButton, resetButton }: QuestionButtonsProps) => {
  return (
    <div className="flex justify-between items-center">
      <Button
        onclick={backButton}
        clasname="px-[24px] max-450:px-[44px] tryAgainButtonShadow max-450:text-[14px] max-750:text-[13px] max-750:max-h-[40px] max-750:px-[20px] max-750:text-[13px]"
        label="უკან"
      />
      <Button
        onclick={resetButton}
        clasname="max-750:px-[20px] tryAgainButtonShadow max-750:text-[13px] max-750:max-h-[40px] max-450:px-[44px] max-450:text-[12px]"
        variant="quaternary"
        label="თავიდან დაწყება"
      />
    </div>
  );
};

export default QuestionButtons;
