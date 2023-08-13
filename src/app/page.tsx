"use client";

import QuestionList from "@/components/QuestionList";
import Result from "@/components/Result";
import { questions } from "@/const/Questons";
import { Container } from "@mui/material";
import React, { useState } from "react";

const QUESTION = 1;
const RESULT = 2;
type PageState = typeof QUESTION | typeof RESULT;

const Home = () => {
  const [pageState, setPageState] = useState<PageState>(QUESTION);
  const [userAnswer, setUserAnswer] = useState(
    Array.from(questions).map(() => 0),
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

  const onSubmitClick = () => {
    if (pageState === QUESTION) setPageState(RESULT);
  };

  return (
    <Container className="min-h-screen py-8">
      {pageState === QUESTION && (
        <QuestionList
          userAnswer={userAnswer}
          onAnswerChange={onAnswerChange}
          onSubmitClick={onSubmitClick}
        />
      )}
      {pageState === RESULT && <Result answers={userAnswer} />}
    </Container>
  );
};

export default Home;
