import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { getRoadster } from '../datas/spaceXRoadster';
import ImageSelector from '../components/All/ImageSelector';

const Roadster = () => {
  const [roadster, setRoadster] = useState(null);
  const [imgSelected, setImgSelected] = useState(0);

  useEffect(() => {
    (async () => {
      setRoadster((await getRoadster()) || null);
    })();
  }, []);
  if (roadster)
    return (
      <Box
        sx={{
          mx: '50px',
          mt: 8,
          px: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h2">{roadster.name}</Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Launched:{' '}
            {new Date(roadster.launch_date_utc).toLocaleString().split(' ')[0]}{' '}
            <br />
          </Typography>
          <Typography variant="body1">{roadster.details}</Typography>
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
              Stats
            </Typography>
            <Typography variant="body2">
              <span>Speed:</span> {roadster.speed_kph}km/h
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Distance from Earth:</span> {roadster.earth_distance_km}km
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Distance from Mars:</span> {roadster.mars_distance_km}km
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Period:</span> {roadster.period_days}days
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Mass:</span> {roadster.launch_mass_kg}kg
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Orbit Type:</span> {roadster.orbit_type}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Longitude:</span> {roadster.longitude}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Apoapsis:</span> {roadster.apoapsis_au}AU
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Periapsis:</span> {roadster.periapsis_au}AU
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Semi Major Axis:</span> {roadster.semi_major_axis_au}AU
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Eccentricity:</span> {roadster.eccentricity}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Inclination:</span> {roadster.inclination}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">
              <span>Argument of Periapsis:</span> {roadster.periapsis_arg}
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Box>
        </Box>

        <ImageSelector
          sx={{ height: 250, width: 550 }}
          img={roadster.flickr_images}
        />
      </Box>
    );
};

export default Roadster;
