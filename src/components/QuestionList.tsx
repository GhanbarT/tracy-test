"use client";

import Question, { QuestionProps } from "@/components/Question";
import { answers, questions } from "@/const/Questons";
import { Answer } from "@/types/Question";
import { Button, Pagination } from "@mui/material";
import React, { FC } from "react";

interface QuestionListProps {
  userAnswer: Array<Answer["value"]>;
  onAnswerChange: QuestionProps["setAnswer"];
  onSubmitClick: React.MouseEventHandler<HTMLElement>;
}

const ITEM_PER_PAGE = 10;

const QuestionList: FC<QuestionListProps> = ({
  userAnswer,
  onAnswerChange,
  onSubmitClick,
}) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      {questions
        .slice((page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE)
        .map((question, index) => {
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
      <Pagination
        count={Math.ceil(questions.length / ITEM_PER_PAGE)}
        page={page}
        onChange={handleChange}
      />
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
