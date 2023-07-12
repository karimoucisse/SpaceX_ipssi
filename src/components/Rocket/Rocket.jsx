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
      <Link href={`/rocket/${rocket.id}`} color="inherit" target="blank">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={rocket.flickr_images[0]}
            alt={rocket.name}
          />
          <CardContent
            sx={{
              backgroundColor: '#1c2930',
              width: '100%',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="white"
              textAlign="center"
            >
              {rocket.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default Rocket;
