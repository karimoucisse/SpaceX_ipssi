import { Box, Link, Stack, Typography } from '@mui/material';
function Header() {
  const currentLocation = window.location.pathname;
  const linkList = [
    {
      text: 'Accueil',
      link: '',
    },
    {
      text: 'Equipages',
      link: 'crews',
    },
    {
      text: 'Histoires',
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
    {
      text: 'Lancement',
      link: 'launches',
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
          <Link href={`/${item.link}`} color="inherit" key={i}>
            <Typography
              color={
                currentLocation.includes(item.link) && item.link.length > 1
                  ? 'lightgray'
                  : 'white'
              }
              variant="body1"
            >
              {item.text}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default Header;
