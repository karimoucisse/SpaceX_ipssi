import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = ({ setValue, placeHolder }) => {
  return (
    <TextField
      id="outlined-basic"
      label={placeHolder}
      variant="filled"
      onChange={(e) => setValue(e.target.value)}
      sx={{ width: '400px' }}
    />
  );
};

export default SearchBar;
