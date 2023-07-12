import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Response from './Response';

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
      setResponseSelected((x) => [...x, val]);
    } else {
      verifieResponse(val + 1);
    }
  };
  const goNext = () => {
    // Next step
    if (!isShowResponse) {
      console.log(verifieResponse());
      // Verifier la bonne response
      // Montrer les responses
      setIsShowResponse(true);
    } else {
      console.log(isCorrect);
      goNextQuestion(isCorrect ? timer : 0);
    }
  };
  const verifieResponse = (value) => {
    console.log(responseSelected);
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
    console.log('resetQuestion');
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
    <Box>
      <p>{timer}</p>
      <Typography>{question.question}</Typography>
      <Box>
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
            isSelected={responseSelected.includes(i)}
          />
        ))}
      </Box>
      {(Array.isArray(question.goodResponse) || isShowResponse) && (
        <Button onClick={goNext}>Next</Button>
      )}
    </Box>
  );
};

export default Main;
