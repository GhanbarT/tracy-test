import Question, { QuestionProps } from "@/components/Question";
import { answers, questions } from "@/const/Questons";
import { Answer } from "@/types/Question";
import { Button } from "@mui/material";
import React, { FC } from "react";

interface QuestionListProps {
  userAnswer: Array<Answer["value"]>;
  onAnswerChange: QuestionProps["setAnswer"];
  onSubmitClick: React.MouseEventHandler<HTMLElement>;
}

const QuestionList: FC<QuestionListProps> = ({
  userAnswer,
  onAnswerChange,
  onSubmitClick,
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      {questions.map(({ question }, index) => {
        return (
          <Question
            key={index}
            question={question}
            row={index}
            answerList={answers}
            answer={userAnswer[index]}
            setAnswer={onAnswerChange}
          />
        );
      })}
      <Button
        className="self-start mt-4 text-xl"
        variant="outlined"
        onClick={onSubmitClick}
      >
        تایید و دیدن نتایج
      </Button>
    </div>
  );
};

export default QuestionList;
