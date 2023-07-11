import React from 'react';
import { Box, Typography } from '@mui/material';
import { Circle } from '@mui/icons-material';

const Rocket = ({ rocket }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <h2>
            {rocket.name}{' '}
            <Circle sx={{ color: rocket.active ? 'green' : 'grey' }} />
          </h2>
          <p>{rocket.description}</p>
          <Typography>By: {rocket.company}</Typography>
          <Typography>In: {rocket.country}</Typography>
        </Box>
        <img src={rocket.flickr_images[0]} alt={rocket.name} />
      </Box>
      <Box>
        <Typography>
          First fly: {new Date(rocket.first_flight).toString()}
        </Typography>
        <Typography>Height: {rocket.height.meters}m</Typography>
        <Typography>Width: {rocket.width.meters}m</Typography>
        <Typography>Mass: {rocket.mass.kg}kg</Typography>
      </Box>
      <Box>Stages: {rocket.stages}</Box>
      <a href={rocket.wikipedia}>Wiki</a>
    </Box>
  );
};

export default Rocket;
