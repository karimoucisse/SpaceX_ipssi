import {
  Box,
  Button,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { getCrews } from '../datas/spaceXCrew';
import { styled } from 'styled-components';
import { getHistories } from '../datas/spaceXHistory';
import { getRockets } from '../datas/spaceXRocket';
import Slider from '../components/slider/Slider';

const Image = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;
const Home = () => {
  const [histories, setHistories] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const [rockets, setRockets] = useState([]);

  const getData = async () => {
    const historiesData = await getHistories();
    setHistories(historiesData ? historiesData : []);

    const rocketsData = await getRockets();
    setRockets(rocketsData ? rocketsData : []);

    const crewsData = await getCrews();
    setPeoples(crewsData ? crewsData : []);
  };
  useEffect(() => {
    getData();
  }, []);

  if (histories.length === 0 || peoples.length === 0 || rockets.length === 0) {
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
    <Box
      display="flex"
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: '50px 100px',
        backgroundColor: '#FAF9F8',
      }}
    >
      <Slider imageArray={rockets[1]?.flickr_images} />
      <Box>
        <Stack
          alignItems="center"
          direction="row"
          mb={2}
          px={1}
          justifyContent="space-between"
        >
          <Typography variant="h5">Equipages</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1c2930',
              '&:hover': {
                background: '#1c2930',
              },
            }}
          >
            <Link href={`/crews`} color="inherit">
              Voir Plus
            </Link>
          </Button>
        </Stack>
        <Box
          display="flex"
          gap={4}
          flexWrap="wrap"
          justifyContent="center"
          mt={4}
        >
          {peoples.slice(0, 4).map((people, i) => (
            <People key={i} people={people} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
