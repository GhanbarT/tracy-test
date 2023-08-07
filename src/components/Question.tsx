import { Answer } from "@/types/Question";
import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC } from "react";

export interface QuestionProps {
  question: string;
  row: number;
  answerList: Array<Answer>;
  answer: Answer["value"];
  setAnswer: (answer: Answer["value"], row: number) => void;
}

const Question: FC<QuestionProps> = ({
  question,
  row,
  answerList,
  answer,
  setAnswer,
}) => {
  const onAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+event.target.value)) setAnswer(Number(event.target.value), row);
  };

  return (
    <Card className="w-full p-16 h-fit">
      <FormControl className="h-fit">
        <FormLabel className="mb-3">{question}</FormLabel>
        <RadioGroup value={answer} onChange={onAnswerChange}>
          {answerList.map(({ text, value }, index) => {
            return (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={text}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Card>
  );
};

export default Question;
