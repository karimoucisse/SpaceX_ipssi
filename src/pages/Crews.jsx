import { Box, CircularProgress, Pagination, Typography } from '@mui/material';
import People from '../components/Crew/People';
import { useEffect, useState } from 'react';
import { getCrews } from '../datas/spaceXCrew';
import SearchBar from '../components/All/SearchBar';
import { getCrew } from '../datas/spaceXCrew';

const Crew = () => {
  const [peoples, setPeoples] = useState([]);
  const [value, setValue] = useState([]);
  const [showValue, setShowValue] = useState([]);
  const [page, setPage] = useState(1);
  const [searchBarValue, setSearchBarValue] = useState('');
  const firstIndex = (page - 1) * 8;
  const handleChange = (e, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
    setPage(1);
    setShowValue(
      value.filter((x) =>
        x.name.toLowerCase().includes(searchBarValue.toLowerCase()),
      ),
    );
  }, [searchBarValue, value]);

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
    <Box sx={{ mx: 16 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
        }}
      >
        <Typography sx={{ pt: 8 }} variant="h2">
          Équipage
        </Typography>
        <Box>
          <SearchBar placeHolder="Recherche ..." setValue={setSearchBarValue} />
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
            La personne que vous chercher n'est pas trouvable
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
              pt: 10,
              backgroundColor: '#FAF9F8',
            }}
          >
            {showValue.slice(firstIndex, firstIndex + 8).map((people, i) => (
              <People key={i} people={people} />
            ))}
          </Box>
          <Box display="flex" width="100%" justifyContent="center">
            <Pagination
              count={Math.round(showValue.length / 8)}
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
