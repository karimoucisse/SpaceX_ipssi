import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const People = ({ people }) => {
  //   const navigate = useNavigate();
  console.log(people);
  return (
    <Card
      sx={{
        width: 300,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
      //   onClick={() => navigate(`/pokemon/${pokemon.pokedexId}`)}
    >
      <Link href={`/crew/${people.id}`} color="inherit">
        
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            width="200"
            image={people?.image}
            alt={people.name}
          />
          <CardContent
            sx={{
              backgroundColor: '#1c2930',
              width: '100%',
              pl: 4,
            }}
          >
            <Typography gutterBottom variant="h5" component="div" color="white">
              {people.name}
            </Typography>
            <Typography variant="body2" color="white">
              {people.agency}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default People;
