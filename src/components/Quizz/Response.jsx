import React from 'react';
import { Box, Typography } from '@mui/material';

const Response = ({ value, selected, isGoodResponse, isSelected }) => {
  // surbrillance si isGoodResponse
  return (
    <Box
      onClick={selected}
      sx={{
        backgroundColor: isGoodResponse ? 'green' : isSelected ? 'blue' : '',
      }}
    >
      <Typography>{value}</Typography>
    </Box>
  );
};

export default Response;
