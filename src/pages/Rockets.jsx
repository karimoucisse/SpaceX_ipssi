import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getRockets } from '../datas/spaceXRocket';
import Rocket from '../components/Rocket/Rocket';
const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  const getData = async () => {
    const data = await getRockets();
    setRockets(data ? data : []);
  };

  useEffect(() => {
    getData();
  }, []);
  //   getRockets
  console.log(rockets);
  if (rockets.length === 0) {
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF9F8',
      }}
    >
      <CircularProgress size="100px" />
    </Box>;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#FAF9F8',
        gap: '40px',
      }}
    >
      {rockets.map((rocket, i) => (
        <Rocket key={i} rocket={rocket} />
      ))}
    </Box>
  );
};

export default Rockets;
