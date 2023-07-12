import { Box, Link, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
function Header() {
  const linkList = [
    {
      text: 'Accueil',
      link: '',
    },
    {
      text: 'Equipage',
      link: 'crews',
    },
    {
      text: 'Historique',
      link: 'histories',
    },
    {
      text: 'Fusées',
      link: 'rockets',
    },
    {
      text: 'Informations',
      link: 'informations',
    },
  ];
  return (
    <Box
      sx={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        px: '100px',
        backgroundColor: '#1c2930',
        color: 'white',
      }}
    >
      <Box flex={1}>
        <Link href={`/`} color="inherit">
          <Typography variant="h5">SpaceX</Typography>
        </Link>
      </Box>
      <Stack
        direction="row"
        spacing={4}
        sx={{ flex: '2', color: 'white', alignItems: 'center' }}
      >
        {linkList.map((item, i) => (
          <Link href={`/${item?.link}`} color="inherit" key={i}>
            <Typography color="white" variant="body1">
              {item.text}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default Header;
