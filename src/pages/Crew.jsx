import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  Link,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { getCrew } from '../datas/spaceXCrew';
import { styled } from 'styled-components';
import Details from '../components/Rocket/Details';

const Image = styled.img`
  height: 75vh;
  width: auto;
  object-fit: cover;
  max-height: 100vh;
  border-radius: 5px;
`;
const Crew = () => {
  const { id } = useParams();
  const [people, setPeople] = useState([]);

  const getData = async () => {
    const data = await getCrew();
    const crew = data.find((item) => item.id.toString() === id);
    setPeople(crew);
  };

  useEffect(() => {
    getData();
  }, []);

  if (people.length === 0) {
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
    <Details image={people.image} title={people.name} link={people?.wikipedia}>
      <Typography mb={2}>Agence: {people.agency}</Typography>
      <Stack direction="row" spacing={2} mb={6}>
        <Typography variant="body1">En activité: </Typography>
        <Box
          height="20px"
          width="20px"
          backgroundColor={people.status === 'active' ? 'green' : 'red'}
          sx={{ borderRadius: '50%' }}
        ></Box>
      </Stack>
    </Details>
  );
};

export default Crew;
