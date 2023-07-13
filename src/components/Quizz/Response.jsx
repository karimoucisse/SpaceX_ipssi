import React from 'react';
import { Box, Typography } from '@mui/material';

const Response = ({ value, selected, isGoodResponse, isSelected }) => {
  // surbrillance si isGoodResponse
  return (
    <Box
      sx={{
        width: '50%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '5px 0',
      }}
    >
      <Box
        sx={{
          backgroundColor: isGoodResponse
            ? 'green'
            : isSelected
            ? '#6c84ff'
            : '',
          color: isGoodResponse ? 'white' : 'black',
          border: '1px solid #797979FF',
          borderRadius: '5px',
          padding: '5px',
          cursor: 'pointer',
        }}
        onClick={selected}
      >
        <Typography>{value}</Typography>
      </Box>
    </Box>
  );
};

export default Response;
