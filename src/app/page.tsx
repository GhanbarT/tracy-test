"use client";

import Question from "@/components/Question";
import { answers, questions } from "@/const/Questons";
import { Button, Container } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [userAnswer, setUserAnswer] = useState(
    Array.from(questions).map(() => -1),
  );

  const onAnswerChange = (answer: number, row: number) => {
    setUserAnswer((p) =>
      p.map((ans, index) => {
        if (index === row) {
          return answer;
        }
        return ans;
      }),
    );
  };

  return (
    <Container className="flex flex-col min-h-screen w-full lg:w-8/12 justify-center overflow-y-auto items-center gap-4 py-8">
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
      <Button className="self-start mt-4 text-xl" variant="outlined">
        تایید و دیدن نتایج
      </Button>
    </Container>
  );
};

export default Home;
