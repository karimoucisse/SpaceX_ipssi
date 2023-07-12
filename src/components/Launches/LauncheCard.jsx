import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
const Image = styled.img`
  height: 200px;
  width: auto;
  object-fit: cover;
  border-radius: 5px;
`;
const LauncheCard = ({ launche }) => {
  const date = moment(launche.date_local).locale('fr');
  const jour = date.format('DD');
  const mois = date.format('MMMM');
  const annee = date.format('YYYY');

  return (
    <Card
      sx={{
        width: 300,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '5px',
      }}
    >
      <Link href={`/launche/${launche.id}`} color="inherit">
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            width="200"
            image={launche.links?.patch.small}
            alt={launche.name}
          />
          <CardContent
            sx={{
              backgroundColor: '#1c2930',
              width: '100%',
              pl: 4,
            }}
          >
            <Typography gutterBottom variant="h5" component="div" color="white">
              {launche.name}
            </Typography>
            <Typography variant="body2" color="white">
              Date: {jour}, {mois}, {annee}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="white">
                Status:
              </Typography>
              <Box
                sx={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: launche.success ? 'green' : 'red',
                  borderRadius: '50%',
                }}
              ></Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default LauncheCard;
