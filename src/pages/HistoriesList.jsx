import React, { useEffect, useState } from 'react';
import { getHistories } from '../datas/spaceXHistory';
import Article from '../components/History/Article';
import { Box, CircularProgress } from '@mui/material';
const HistoriesList = () => {
  const [histories, setHistories] = useState([]);

  const getData = async () => {
    const data = await getHistories();
    setHistories(data ? data : []);
  };

  useEffect(() => {
    getData();
  }, []);
  if (histories.length === 0) {
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
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#FAF9F8',
        gap: '20px',
        padding: '40px 100px',
      }}
    >
      {histories.map((article, i) => (
        <Article key={i} article={article} />
      ))}
    </Box>
  );
};

export default HistoriesList;
