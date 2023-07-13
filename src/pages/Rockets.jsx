import { Box, CircularProgress, Typography } from '@mui/material';
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
    <Box sx={{ padding: '50px', backgroundColor: '#FAF9F8' }}>
      <Typography variant="h2">Fusées</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          mt: 8,
        }}
      >
        {rockets.map((rocket, i) => (
          <Rocket key={i} rocket={rocket} />
        ))}
      </Box>
    </Box>
  );
};

export default Rockets;
