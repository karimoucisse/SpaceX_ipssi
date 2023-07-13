import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from '@mui/material';

const Launchpad = ({ launchpad }) => {
  return (
    <Card
      sx={{
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          width="200"
          image={launchpad?.data?.images?.large[0]}
          alt={launchpad?.data?.name}
        />
        <CardContent
          sx={{
            backgroundColor: '#1c2930',
            width: '100%',
          }}
        >
          <Stack spacing={1} p={2} sx={{ width: '100%' }}>
            <Typography gutterBottom variant="h5" component="div" color="white">
              {launchpad?.data?.name} ({launchpad?.data?.full_name})
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="white"
            >
              Region: {launchpad?.data?.region}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="white"
            >
              Latitude: {launchpad?.data?.latitude}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="white"
            >
              Longitude: {launchpad?.data?.longitude}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="white"
              sx={{ display: 'flex', flexWrap: 'wrap' }}
            >
              details: {launchpad?.data?.details}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Launchpad;
