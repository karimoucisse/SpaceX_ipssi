import { useParams } from 'react-router-dom';
import Details from '../components/All/Details';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { getLaunchByID, getLaunche } from '../datas/spaceXLaunches';
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
    const data = await getLaunchByID(id);
    setLaunchInfos(data);
  };

  useEffect(() => {
    getData();
    getLatestLaunchInfos();
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
              <Typography variant="body1">Orbit: {item.orbit}</Typography>
            </div>
          ))}
      </Details>
      {launche && (
        <>
          <Box sx={{ px: '50px' }}>
            {launchInfos?.crew?.length > 0 && (
              <Typography variant="h5" mb={2} ml="50px">
                Equipages
              </Typography>
            )}
            <Box
              sx={{
                display: 'flex',

                justifyContent: 'center',
                gap: '40px',

                flexWrap: 'wrap',
              }}
            >
              {launchInfos?.crew?.map((data, i) => (
                <People key={i} people={data.crew} role={data.role} />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              px: '100px',
              mt: '20px',
            }}
          >
            <Typography variant="h5" mb={2}>
              Rampe de lancement
            </Typography>
            <Launchpad launchpad={launchInfos?.launchpad} />
          </Box>
        </>
      )}
      {launche?.links?.youtube_id && (
        <Box display="flex" justifyContent="center" width="100%" my="50px">
          <iframe
            width="960"
            height="615"
            src={`https://www.youtube.com/embed/${launche.links.youtube_id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      )}
    </>
  );
};

export default Launche;
