import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  Pagination,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getLatestLaunche, getLaunches } from '../datas/spaceXLaunches';
import { styled } from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
import LauncheCard from '../components/Launches/LauncheCard';
import LatestLauncheCard from '../components/Launches/LatestLauncheCard';
import SearchBar from '../components/All/SearchBar';
import { useRef } from 'react';
const Launches = () => {
  const divRef = useRef(null);
  const [launches, setLaunches] = useState([]);
  const [latestLaunche, setLatestLaunche] = useState([]);
  const date = moment(launches.date_local).locale('fr');
  const [value, setValue] = useState('');
  const [searchBarValue, setSearchBarValue] = useState('');
  const [showValue, setShowValue] = useState([]);
  const [page, setPage] = useState(1);
  const firstIndex = (page - 1) * 24;

  const handleChange = (e, value) => {
    setPage(value);
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  };
  const getData = async () => {
    const launchesData = await getLaunches();
    setLaunches(launchesData ? launchesData : []);
    setShowValue(launchesData ? launchesData : []);

    const latestlaunchesData = await getLatestLaunche();
    setLatestLaunche(latestlaunchesData ? latestlaunchesData : []);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPage(1);
    setShowValue(
      launches.filter((x) =>
        x.name.toLowerCase().includes(searchBarValue.toLowerCase()),
      ),
    );
  }, [searchBarValue, launches]);

  if (
    launches.length === 0 ||
    latestLaunche.length === 0 ||
    showValue.length === 0
  ) {
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
    <>
      <Box sx={{ padding: '24px 199px', backgrounColor: '#FAF9F8' }}>
        <Typography variant="h5" mb={2}>
          Dernier lancement
        </Typography>
        <LatestLauncheCard latestLaunche={latestLaunche} />
        <Box mb={4}>
          <SearchBar placeHolder="Recherche ..." setValue={setSearchBarValue} />
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="60px"
        >
          {showValue.slice(firstIndex, firstIndex + 24).map((launcheData) => (
            <LauncheCard key={launcheData.id} launche={launcheData} />
          ))}
        </Box>
      </Box>
      {showValue.length === 0 && searchBarValue.length > 0 ? (
        <Box
          height="60vh"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">
            Le lancement que vous chercher n'est pas trouvable
          </Typography>
        </Box>
      ) : (
        <Box display="flex" width="100%" justifyContent="center">
          <Pagination
            count={Math.round(showValue.length / 24)}
            color="primary"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Box>
      )}
    </>
  );
};

export default Launches;
