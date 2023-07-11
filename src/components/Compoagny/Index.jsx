import React from 'react';
import { Box, Typography } from '@mui/material';

const Index = ({ info }) => {
  return (
    <Box>
      <h1>{info.name}</h1>
      <Typography>
        {info.headquarters.address},{info.headquarters.city},
        {info.headquarters.state}
      </Typography>
      <Typography>
        Founded by {info.founder} in {info.founded}. He have actualy{' '}
        {info.employees} employees
      </Typography>
      <p>{info.summary}</p>
      <p>
        He have {info.vehicles} rockets, {info.launch_sites} launch sites and{' '}
        {info.test_sites} test sites. {info.name} is evaluate to{' '}
        {info.valuation}$
      </p>
      <Box>
        <a href={info.link.website}>Website</a>
        <a href={info.link.flickr}>Flickr</a>
        <a href={info.link.twitter}>Twitter</a>
      </Box>
    </Box>
  );
};

export default Index;
