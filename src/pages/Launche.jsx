import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getLaunche } from '../datas/spaceXLaunches';
import { getCrew } from '../datas/spaceXCrew';
import People from '../components/Crew/People';

const Launche = () => {
  const { id } = useParams();
  const [launche, setLaunche] = useState([]);
  const [crews, setCreaws] = useState([]);

  const getData = async () => {
    const launcheData = await getLaunche(id);
    setLaunche(launcheData);
  };
  const getCrewData = async () => {
    const crewArray = [];
    launche?.crew.forEach(async (item) => {
      let data = await getCrew(item.crew);
      data = [data, { role: item.role }];
      crewArray.push([data, { role: item.role }]);
    });
    setCreaws(crewArray);
  };

  useEffect(() => {
    getData();
    getCrewData();
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
    // {launche?.crew ?  : }
  }
  return <Details image={launche.links?.patch.large} title={launche.name} />;
};

export default Launche;
