import React, { useState } from 'react';
import Main from '../components/Quizz/Main';

import QuizzData from '../datas/quizz.json';

// const quizz = {question: "Test quizz", response: ["respionse1", "response2", "response3"], goodResponse: [0,1]}
const Question = () => {
  const [quizz, setQuizz] = useState(QuizzData);
  const [quizzSelecter, setQuizzSelecter] = useState(0);
  const [score, setScore] = useState(0);
  const isFinish = quizz.length <= quizzSelecter + 1;

  const nextQuizz = (addScore) => {
    setScore((x) => x + addScore);
    console.log(quizz.length, quizzSelecter);
    if (quizz.length > quizzSelecter + 1) setQuizzSelecter((x) => x + 1);
    else {
      console.log('Score : ', score);
    }
  };

  return (
    <>
      {isFinish ? (
        <div>Score: {score}</div>
      ) : (
        <Main question={quizz[quizzSelecter]} goNextQuestion={nextQuizz} />
      )}
    </>
  );
};

export default Question;
