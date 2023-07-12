import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getLatestLaunche, getLaunches } from '../datas/spaceXLaunches';
import { styled } from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
import LauncheCard from '../components/Launches/LauncheCard';
import LatestLauncheCard from '../components/Launches/LatestLauncheCard';

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [latestLaunche, setLatestLaunche] = useState([]);
  const date = moment(launches.date_local).locale('fr');
  const jour = date.format('DD');
  const mois = date.format('MMMM');
  const annee = date.format('YYYY');
  const getData = async () => {
    const launchesData = await getLaunches();
    setLaunches(launchesData ? launchesData : []);

    const latestlaunchesData = await getLatestLaunche();
    setLatestLaunche(latestlaunchesData ? latestlaunchesData : []);
  };
  useEffect(() => {
    getData();
  }, []);

  if (launches.length === 0 || latestLaunche === 0) {
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
    <Box sx={{ padding: '50px 199px', backgrounColor: '#FAF9F8' }}>
      <Typography variant="h5" mb={2}>
        Dernier lancement
      </Typography>
      <LatestLauncheCard latestLaunche={latestLaunche} />
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap="60px"
      >
        {launches.map((launcheData) => (
          <LauncheCard key={launcheData.id} launche={launcheData} />
        ))}
      </Box>
    </Box>
  );
};

export default Launches;
