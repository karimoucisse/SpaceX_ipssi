import React, { useEffect, useState } from 'react';
import { getCompagny } from '../datas/spaceXCompagny';

import Index from '../components/Compagny/Index';
import { Box } from '@mui/material';

const Info = () => {
  const [information, setInformation] = useState(null);

  const getData = async () => {
    const data = await getCompagny();
    setInformation(data ? data : null);
  };

  useEffect(() => {
    getData();
  }, []);
  if (information)
    return (
      <Box sx={{ mx: '50px', mt: 8, px: 8 }}>
        <Index info={information} />
      </Box>
    );
};

export default Info;
