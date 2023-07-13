import { FilledInput, Input, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Search } from '@mui/icons-material';

const SearchBar = ({ setValue, placeHolder }) => {
  return (
    <Input
      id="outlined-basic"
      placeholder={placeHolder}
      // variant="filled"
      onChange={(e) => setValue(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      }
      sx={{
        width: '400px',
        backgroundColor: '#D3D3D3',
        padding: '10px 20px',
        fontSize: '20px',
      }}
      variant="standard"
    />
  );
};

export default SearchBar;
