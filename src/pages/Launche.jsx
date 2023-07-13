import { useParams } from 'react-router-dom';
import Details from '../components/All/Details';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getLatestLaunchInfo, getLaunche } from '../datas/spaceXLaunches';
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
  // if (launchInfos.length === 0) {
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       width: '100vw',
  //       height: '100vh',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#FAF9F8',
  //     }}
  //   >
  //     <CircularProgress size="100px" />
  //   </Box>;
  // }
  return (
    <>
      <Details image={launche.links?.patch.large} title={launche.name}>
        {launche &&
          launchInfos?.payloads?.map((item, i) => (
            <div key={i}>
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
            </div>
          ))}
      </Details>
      {launche?.links?.youtube_id && (
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{ margin: '40px' }}
        >
          <iframe
            width="960"
            height="615"
            src={`https://www.youtube.com/embed/${launche.links.youtube_id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
          <Typography variant="h5">rampe de lancement</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              px: '100px',
              alignItems: 'center',
              gap: '40px',
              mt: '40px',
              flexWrap: 'wrap',
            }}
          >
            {launchInfos?.launchpad?.map((data, i) => (
              <Launchpad key={i} launchpad={data} />
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default Launche;
