import React from 'react';
import { Box } from '@mui/material';

const Rocket = ({ rocket }) => {
  return (
    <Box>
      <h2>{rocket.name}</h2>
    </Box>
  );
};

export default Rocket;
