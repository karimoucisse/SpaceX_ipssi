import { useParams } from 'react-router-dom';
import Details from '../components/All/Details';
import People from '../components/Crew/People';
import LauncheCard from '../components/Launches/LauncheCard';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getLatestLaunchInfo, getLaunche } from '../datas/spaceXLaunches';
import { getCrew } from '../datas/spaceXCrew';
import Launchpad from '../components/Launches/Launchpad';

const Launche = () => {
  const { id } = useParams();
  const [launche, setLaunche] = useState([]);
  const [launchInfos, setLaunchInfos] = useState([]);

  const getData = async () => {
    const launcheData = await getLaunche(id);
    setLaunche(launcheData);
  };

  const getLatestLaunchInfos = async () => {
    const data = await getLatestLaunchInfo(id);
    setLaunchInfos(data);
  };

  useEffect(() => {
    getLatestLaunchInfos();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (launche.length === 0) {
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
    <Box sx={{ boxSizing: 'border-box' }}>
      <Details image={launche.links?.patch.large} title={launche.name}>
        {launche &&
          launchInfos?.payloads?.map((item, i) => (
            <>
              <Typography variant="body1" mb={2}>
                Clients: {item.customers[0]}
              </Typography>
              <Typography variant="body1" mb={2}>
                Fabricants: {item.manufacturers[0]}
              </Typography>
              <Typography variant="body1" mb={2}>
                Nationalités: {item.nationalities[0]}
              </Typography>
              <Typography variant="body1" mb={2}>
                Orbit: {item.orbit}
              </Typography>
            </>
          ))}
      </Details>
      {launche?.links?.youtube_id && (
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{ margin: '40px 0' }}
        >
          <iframe
            width="960"
            height="615"
            src={`https://www.youtube.com/embed/${launche.links.youtube_id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      )}
      {launche && (
        <>
          <Box
            sx={{
              display: 'flex',
              px: '50px',
              justifyContent: 'center',
              gap: '40px',
              mt: '40px',
              flexWrap: 'wrap',
            }}
          >
            {launchInfos?.crew?.map((data, i) => (
              <People key={i} people={data.crew} role={data.role} />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              px: '100px',
              alignItems: 'center',
              mt: '40px',
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="h5" mb={1}>Rampes de lancement</Typography>
            {launchInfos?.launchpad?.map((data, i) => (
              <Launchpad key={i} launchpad={data} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Launche;
