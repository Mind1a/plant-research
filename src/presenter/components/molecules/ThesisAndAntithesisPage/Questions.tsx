import { useQuery } from '@tanstack/react-query';
import { fetchquestions } from '../../../../api/use-get-question';
import { Question } from '../../../../types';
import { useState } from 'react';
import Loader from '../../atoms/loader/Loader';
import Button from '../../atoms/buttons/Button';

const Questions = () => {
  const [questionList, setQuestionList] = useState<number[]>([1]);

  const lastElement = questionList[questionList.length - 1];

  const { isLoading, error, data } = useQuery<Question[]>({
    queryKey: ['questions', lastElement],
    queryFn: () => fetchquestions(lastElement),
  });

  const backButton = () => {
    setQuestionList((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  const resetButton = () => {
    setQuestionList([1]);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
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
      <div className="m-auto mt-[16px] flex flex-wrap justify-center gap-[30px] max-750:mt-[36px] max-450:mt-[24px]">
        {data?.map((res, index) => (
          <div
            onClick={() => {
              setQuestionList((prev) => [...prev, res.next_question_id]);
            }}
            className="questionCardShadow flex min-h-[426px] w-full max-w-[570px] cursor-pointer flex-col gap-[24px] rounded-[10px] border border-[#DFE4EA] p-[24px] max-750:min-h-[243px] max-750:gap-[12px] max-450:p-[16px]"
            key={index}
          >
            <div className="min-h-[150px] w-full bg-[#00000004] max-450:min-h-[75px]"></div>
            <div className="max-h-[230px] overflow-y-auto">
              <p className="text-[12px] max-750:text-[14px]">{res.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
