import { useQuery } from '@tanstack/react-query';
import { fetchquestions } from '../../../../api/use-get-question';
import { Question } from '../../../../types';
import { useState, useMemo } from 'react';
import Loader from '../../atoms/loader/Loader';
import { useNavigate } from 'react-router';
import QuestionButtons from './QuestionButtons';
import { v4 as uuidv4 } from 'uuid';

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

  const questionsWithUUID = useMemo(() => {
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
      <div className="flex flex-wrap justify-center gap-[30px] m-auto mt-[16px] max-450:mt-[24px] max-750:mt-[36px]">
        {questionsWithUUID.map((res) => (
          <div
            onClick={() => {
              if (res.next_question_id) {
                setQuestionList((prev) => [...prev, res.next_question_id]);
              } else {
                navigate(`/plant/${res.identified_plant_id}`);
              }
            }}
            className="flex flex-col gap-[24px] max-750:gap-[12px] p-[24px] max-450:p-[16px] border border-[#DFE4EA] rounded-[10px] w-full max-w-[570px] min-h-[426px] max-750:min-h-[243px] cursor-pointer questionCardShadow"
            key={res.uuid}
          >
            <div className="bg-[#00000004] w-full min-h-[150px] max-450:min-h-[75px]"></div>
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
