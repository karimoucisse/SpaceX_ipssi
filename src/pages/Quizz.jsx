import React, { useState } from 'react';
import Main from '../components/Quizz/Main';

import QuizzData from '../datas/quizz/quizz.json';
import { useParams } from 'react-router-dom';

const Question = () => {
  const { id } = useParams();

  const [quizz, setQuizz] = useState(QuizzData[id]);
  const [quizzSelecter, setQuizzSelecter] = useState(0);
  const [score, setScore] = useState(0);
  const isFinish = quizz?.length <= quizzSelecter + 1 || false;

  const nextQuizz = (addScore) => {
    setScore((x) => x + addScore);
    console.log(quizz.length, quizzSelecter);
    if (quizz.length > quizzSelecter + 1) setQuizzSelecter((x) => x + 1);
    else {
      console.log('Score : ', score);
    }
  };

  if (quizz)
    return (
      <>
        {isFinish ? (
          <div>Score: {score}</div>
        ) : (
          <Main question={quizz[quizzSelecter]} goNextQuestion={nextQuizz} />
        )}
      </>
    );
  else return <></>;
};

export default Question;
