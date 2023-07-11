import { Box, CircularProgress, Pagination } from '@mui/material';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { getCrew } from '../datas/spaceXCrew';

const Home = () => {
  const [peoples, setPeoples] = useState([]);
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  const handleChange = (e, value) => {
    setPage(value);
    console.log(value);
  };

  const getData = async () => {
    const data = await getCrew();
    const firstIndex = (page - 1) * 8;
    setPeoples(data.slice(firstIndex, firstIndex + 8));
    setValue(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  if (peoples.length === 0) {
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
        padding: '50px',
      }}
    >
      {peoples.map((people, i) => (
        <People key={i} people={people} />
      ))}
      <Box display="flex" width="100%" justifyContent="center">
        <Pagination
          count={Math.round(value.length / 8)}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Home;
