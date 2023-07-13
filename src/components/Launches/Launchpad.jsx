import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';

const Launchpad = ({ launchpad }) => {
  return (
    <Card
      sx={{
        maxWidth: 900,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
    >
      {/* <Link href={`/`} color="inherit"> */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          width="200"
          image={launchpad?.images?.large[0]}
          alt={launchpad.name}
        />
        <CardContent
          sx={{
            backgroundColor: '#1c2930',
            width: '100%',
            pl: 4,
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {launchpad.name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="white"
          >
            ({launchpad.full_name})
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="white"
          >
            Region: {launchpad.region}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="white"
          >
            Latitude: {launchpad.latitude}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="white"
          >
            Longitude: {launchpad.longitude}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            color="white"
          >
            details: {launchpad.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* </Link> */}
    </Card>
  );
};

export default Launchpad;
