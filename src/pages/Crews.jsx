import { Box, CircularProgress, Pagination, Typography } from '@mui/material';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { getCrews } from '../datas/spaceXCrew';
import SearchBar from '../components/SearchBar';

const Crew = () => {
  const [peoples, setPeoples] = useState([]);
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);
  const [searchBarValue, setSearchBarValue] = useState('');
  const handleChange = (e, value) => {
    setPage(value);
  };

  const getData = async () => {
    const data = await getCrews();
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

  useEffect(() => {
    if (searchBarValue) {
      const newData = value.filter((element) =>
        element.name.toLowerCase().includes(searchBarValue.toLowerCase()),
      );
      const firstIndex = (page - 1) * 8;
      if (newData.length > 8) {
        setPeoples(newData.slice(0, 8));
      } else {
        setPeoples(newData);
      }
    }
  }, [searchBarValue]);

  if (peoples.length === 0 && searchBarValue.length === 0) {
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
    <Box>
      <Box px="100px" pt="50px">
        <SearchBar placeHolder="Recherche ..." setValue={setSearchBarValue} />
      </Box>
      {peoples.length === 0 && searchBarValue.length > 0 ? (
        <Box
          height="60vh"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">
            La personne que vous cherchez n'existe pas.
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              padding: '50px 50px 0 50px',
              backgroundColor: '#FAF9F8',
            }}
          >
            {peoples.map((people, i) => (
              <People key={i} people={people} />
            ))}
          </Box>
          <Box display="flex" width="100%" justifyContent="center">
            <Pagination
              count={Math.round(value.length / 8)}
              color="primary"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Crew;
