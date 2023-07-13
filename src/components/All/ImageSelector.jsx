import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import styled from 'styled-components';
import { Circle } from '@mui/icons-material';

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-height: 100vh;
  border-radius: 5px;
`;
const ImageSelector = ({ sx, img }) => {
  const [imgSelected, setImgSelected] = useState(0);
  return (
    <Box sx={{ ...sx, position: 'relative' }}>
      <Image src={img[imgSelected]} sx={{ zIndex: 1 }} />
      <Stack
        direction="row"
        spacing={3}
        sx={{
          position: 'absolute',
          zIndex: 3,
          bottom: '10px',
          left: 0,
          right: 0,
          justifyContent: 'center',
        }}
      >
        {img.map((x, i) => (
          <Circle
            onClick={() => setImgSelected(i)}
            key={i}
            sx={{ zIndex: 3, color: imgSelected == i ? '#0040a4' : 'grey' }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ImageSelector;
