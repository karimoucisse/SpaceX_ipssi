import { Box, Link, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { styled } from 'styled-components';
const Image = styled.img`
  height: 400px;
  width: auto;
  object-fit: cover;
  border-radius: 5px;
`;
const LatestLauncheCard = ({ latestLaunche }) => {
  const date = moment(latestLaunche.date_local).locale('fr');
  const jour = date.format('DD');
  const mois = date.format('MMMM');
  const annee = date.format('YYYY');
  return (
    <Link href={`/launche/${latestLaunche.id}`} color="inherit">
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          width: '100%',
          backgroundColor: 'lightgray',
          borderRadius: '5px',
          p: '30px 50px',
          mb: '60px',
          cursor: 'pointer',
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h3">{latestLaunche.name}</Typography>
          <Typography variant="h5">
            Date: {jour}, {mois}, {annee}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h5">Status:</Typography>
            <Box
              sx={{
                height: '20px',
                width: '20px',
                backgroundColor: latestLaunche.success ? 'green' : 'red',
                borderRadius: '50%',
              }}
            ></Box>
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center" sx={{ cursor: 'pointer' }}>
          <Image src={latestLaunche.links?.patch.large} />
        </Box>
      </Stack>
    </Link>
  );
};

export default LatestLauncheCard;
