import React, { useState } from 'react';
import Main from '../components/Quizz/Main';

import QuizzData from '../datas/quizz/quizz.json';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
              Votre score est de : {score} pts
            </Typography>
            <Link to={'/quizz/'}>
              <Button variant="contained" sx={{ my: 2 }}>
                Retour à la selection de Quizz
              </Button>
            </Link>
          </Box>
        ) : (
          <Main question={quizz[quizzSelecter]} goNextQuestion={nextQuizz} />
        )}
      </>
    );
  else return <></>;
};

export default Question;
