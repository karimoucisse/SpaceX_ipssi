import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { Circle } from '@mui/icons-material';

const Rocket = ({ rocket }) => {
  return (
    <Card
      sx={{
        width: 600,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
    >
      <Link href={rocket.wikipedia} color="inherit" target='blank'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            // width="200"
            image={rocket.flickr_images[0]}
            alt={rocket.name}
          />
          <CardContent
            sx={{
              backgroundColor: '#1c2930',
              width: '100%',
            }}
          >
            <Typography gutterBottom variant="h5" component="div" color="white">
              {rocket.name}
            </Typography>
            <Typography variant="body2" color="white">
              By: {rocket.company}
            </Typography>
            <Typography variant="body2" color="white">
              In: {rocket.country}
            </Typography>
            <Typography variant="body2" color="white">
              First fly: {new Date(rocket.first_flight).toString()}
            </Typography>
            <Typography variant="body2" color="white">
              Height: {rocket.height.meters}m
            </Typography>
            <Typography variant="body2" color="white">
              Width: {rocket.diameter.meters}m
            </Typography>
            <Typography variant="body2" color="white">
              Mass: {rocket.mass.kg}kg
            </Typography>
            <Typography variant="body2" color="white">
              Stages: {rocket.stages}
            </Typography>
            <Typography variant="body2" color="white">
              {rocket.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default Rocket;
