import { Box, Button, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const Image = styled.img`
  height: 75vh;
  width: auto;
  object-fit: cover;
  max-height: 100vh;
  border-radius: 5px;
`;
const Details = ({ image, title, link, children }) => {
  const [imageIndex, setImageIndex] = useState('0');
  return (
    <Box display="flex" p={4}>
      {image && typeof image !== 'string' ? (
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          <Image src={image[imageIndex]} />
          <Stack
            direction="row"
            spacing={3}
            sx={{
              position: 'absolute',
              zIndex: 3,
              bottom: '40px',
              cursor: 'pointer',
            }}
          >
            {image.map((element, i) => (
              <Box
                key={i}
                height="20px"
                width="20px"
                spa
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={imageIndex == i ? 'red' : 'lightgray'}
                sx={{ borderRadius: '50%' }}
                onClick={() => setImageIndex(i.toString())}
              ></Box>
            ))}
          </Stack>
        </Box>
      ) : (
        <Box flex={1} display="flex" justifyContent="center">
          <Image src={image} />
        </Box>
      )}
      <Box flex={1} py={4}>
        <Box px="100px">
          <Typography variant="h4" mb={4}>
            {title}
          </Typography>
          {children}

          {link && (
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#1c2930',
                '&:hover': {
                  background: '#1c2930',
                },
              }}
            >
              <Link href={link} target="blank" color="inherit">
                Site web
              </Link>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
