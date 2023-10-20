import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Box from '@mui/material/Box';
import homeSeriesmainImage from '../asserts/homeSeriesImage.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductsContainerV2(props) {
  const theme = useTheme();

  return (
    <Grid sx={{ height: '100vh', paddingTop: '8vh', paddingBottom: '8vh', color: '#104c8a' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '5vh', fontSize: '2rem' }}>
        Home lifts at their best
      </Grid>
      <Grid item sx={{ height: '95vh' }}>
        <Card>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              sx={{ height: '90vh' }}
              image={homeSeriesmainImage}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '98%',
                height: '93%',
                // bgcolor: 'rgba(0, 0, 0, 0.54)',
                color: 'white',
                padding: '2% 1% 2% 1%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              {/* <Typography variant="h5">Lizard</Typography>
              <Typography variant="body2">Subtitle</Typography> */}
              <Box sx={{ width: '47%', backgroundColor: '#ffffff50', color: '' }}>
              <Typography variant="h5">About US</Typography>
              <Typography variant="body"></Typography>
              </Box>
              <Box sx={{ width: '47%', backgroundColor: '#ffffff50', color: ''  }}>
              <Typography variant="h5">Ab</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>

  );
}

export default ProductsContainerV2;