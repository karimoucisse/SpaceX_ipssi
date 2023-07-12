import { useEffect, useState } from 'react';
import { getRockets } from '../datas/spaceXRocket';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import Details from '../components/Rocket/Details';
import { useParams } from 'react-router-dom';

const Rocket = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState([]);

  const getData = async () => {
    let data = await getRockets();
    data = data.find((item) => item.id.toString() === id);
    setRocket(data ? data : []);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(rocket);

  if (rocket.length === 0) {
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF9F8',
      }}
    >
      <CircularProgress size="100px" />
    </Box>;
  }
  return (
    <Details
      image={rocket?.flickr_images}
      link={rocket.wikipedia}
      title={rocket.name}
    >
      <Stack spacing={1} mb={4}>
        <Typography variant="body2">Par: {rocket.company}</Typography>
        <Typography variant="body2">En: {rocket.country}</Typography>
        <Typography variant="body2">
          First fly: {new Date(rocket.first_flight).toString()}
        </Typography>
        <Typography variant="body2">
          Height: {rocket.height?.meters}m
        </Typography>
        <Typography variant="body2">
          Diameter: {rocket.diameter?.meters}m
        </Typography>
        <Typography variant="body2">Mass: {rocket.mass?.kg}kg</Typography>
        <Typography variant="body2">Stages: {rocket.stages}</Typography>
        <Typography variant="body2">{rocket.description}</Typography>
      </Stack>
    </Details>
  );
};
export default Rocket;
