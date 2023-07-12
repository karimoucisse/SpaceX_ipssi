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
import { getCrew } from '../datas/spaceXCrew';
import { styled } from 'styled-components';
import { getHistories } from '../datas/spaceXHistory';
import { getRockets } from '../datas/spaceXRocket';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100% !important;
  max-height: 70vh !important;
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

    const crewsData = await getCrew();
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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={rockets[1]?.flickr_images[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={rockets[1]?.flickr_images[2]} />{' '}
        </SwiperSlide>
      </Swiper>

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
        <Box display="flex" gap={4}>
          {peoples.slice(0, 4).map((people, i) => (
            <People key={i} people={people} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
