import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const Index = ({ info }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h2">{info.name}</Typography>
        <Typography variant="subtitle2">
          {info.headquarters.address}, {info.headquarters.city},{' '}
          {info.headquarters.state}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {info.summary}
        </Typography>
        <Box
          sx={{
            mx: 8,
            mt: 2,
            '& .MuiTypography-body2': {
              mb: 0.5,
              fontSize: 16,
              '& span': { fontWeight: 600 },
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Info
          </Typography>
          <Typography variant="body2">
            <span>Founder:</span> {info.founder}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Founded:</span> {info.founded}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Employees:</span> {info.employees}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Vehicles:</span> {info.vehicles}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Launch sites:</span> {info.launch_sites}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Test sites:</span> {info.test_sites}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>CEO:</span> {info.ceo}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>CTO:</span> {info.cto}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>COO:</span> {info.coo}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>CTO propulsion:</span> {info.cto_propulsion}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            <span>Valuation:</span> {info.valuation}
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', '& a': { mx: 1 } }}>
        <a href={info.links.website}>Website</a>
        <a href={info.links.flickr}>Flickr</a>
        <a href={info.links.twitter}>Twitter</a>
      </Box>
    </Box>
  );
};

export default Index;
