import { Box, Button, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import ImageSelector from './ImageSelector';

const Image = styled.img`
  object-fit: cover;
  max-height: 500px !important;
  border-radius: 5px;
`;
const Details = ({ image, title, link, children }) => {
  const [imageIndex, setImageIndex] = useState('0');
  return (
    <Box display="flex" p={4}>
      {image && typeof image !== 'string' ? (
        <ImageSelector img={image} sx={{ height: '500px', width: '500px' }} />
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
