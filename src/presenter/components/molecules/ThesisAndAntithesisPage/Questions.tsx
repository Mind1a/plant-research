import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import { fetchquestions } from '../../../../api/use-get-question';
import { Question } from '../../../../types';
import Loader from '../../atoms/loader/Loader';
import QuestionButtons from './QuestionButtons';

const Questions: React.FC = () => {
  const navigate = useNavigate();

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

  const questionsId = useMemo(() => {
    return (
      data?.map((item) => ({
        ...item,
        uuid: uuidv4(),
      })) ?? []
    );
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <QuestionButtons backButton={backButton} resetButton={resetButton} />
      <div className="m-auto mt-[16px] flex flex-wrap justify-center gap-[30px] max-750:mt-[36px] max-450:mt-[24px]">
        {questionsId.map((res) => (
          <div
            onClick={() => {
              if (res.next_question_id) {
                setQuestionList((prev) => [...prev, res.next_question_id]);
              } else {
                navigate(`/plant/${res.identified_plant_id}`);
              }
            }}
            className="questionCardShadow flex min-h-[426px] w-full max-w-[570px] cursor-pointer flex-col gap-[24px] rounded-[10px] border border-[#DFE4EA] bg-[#FFFFFF] p-[24px] transition-all duration-150 ease-in-out hover:bg-[#f0f0f075] max-750:min-h-[243px] max-750:gap-[12px] max-450:p-[16px]"
            key={res.uuid}
          >
            <div className="min-h-[230px] overflow-y-auto">
              <p className="text-[12px] max-750:text-[14px]">{res.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
