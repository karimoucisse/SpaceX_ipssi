import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Response from './Response';
import BarTimer from './BarTimer';

/*
    question: {
    question: 'question a poser',
    response: [ "Response 1", "Response 2", ...]
    goodResponse: [indexResponse, ...]
    }
 */

const defaultTime = 15;

let timerRef = null;
let timeCalcul = 0;
const Main = ({ question, goNextQuestion }) => {
  const [isShowResponse, setIsShowResponse] = useState(false);
  const [responseSelected, setResponseSelected] = useState([]);
  const [timer, setTimer] = useState(defaultTime);
  const [isCorrect, setIsCorrect] = useState(false);

  let selectResponse = async (val) => {
    // Show Response
    if (Array.isArray(question.goodResponse)) {
      if (responseSelected.includes(val))
        setResponseSelected((x) => x.filter((y) => x === y));
      else setResponseSelected((x) => [...x, val]);
    } else {
      verifieResponse(val + 1);
    }
  };
  const goNext = () => {
    // Next step
    if (!isShowResponse) {
      // Verifier la bonne response
      // Montrer les responses
      setIsShowResponse(true);
    } else {
      goNextQuestion(isCorrect ? timer : 0);
    }
  };
  const verifieResponse = (value) => {
    clearInterval(timerRef);
    setIsShowResponse(true);
    if (
      (Array.isArray(question.goodResponse) &&
        question.goodResponse.every((x) => responseSelected.includes(x))) ||
      (value && value - 1 == question.goodResponse)
    )
      setIsCorrect(true);
  };

  useEffect(() => {
    setIsCorrect(false);
    setIsShowResponse(false);
    setResponseSelected([]);
    setTimer(defaultTime);
    timeCalcul = defaultTime;
    clearInterval(timerRef);
    timerRef = setInterval(roundInterval, 1000);
  }, [question]);

  const roundInterval = () => {
    if (timeCalcul != 0) {
      setTimer((x) => x - 1);
      timeCalcul--;
    } else {
      verifieResponse(null);
    }
  };

  return (
    <Box
      sx={{
        padding: '0 50px',
        textAlign: 'center',
      }}
    >
      <BarTimer value={timer} maxValue={defaultTime} />
      <Typography sx={{ my: 2 }} variant="h5">
        {question.question}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 4 }}>
        {question.response.map((x, i) => (
          <Response
            key={i}
            value={x}
            selected={() => selectResponse(i)}
            isGoodResponse={
              isShowResponse &&
              (question.goodResponse == i ||
                (Array.isArray(question.goodResponse) &&
                  question.goodResponse.includes(i)))
            }
            isSelected={!isShowResponse && responseSelected.includes(i)}
          />
        ))}
      </Box>
      {(Array.isArray(question.goodResponse) || isShowResponse) && (
        <Button variant="contained" onClick={goNext}>
          {isShowResponse ? 'Next question' : 'Valid responses'}
        </Button>
      )}
    </Box>
  );
};

export default Main;
