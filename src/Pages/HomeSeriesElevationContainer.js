import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';
import { HeaderColor, SubHeaderColor } from './Constants';
import CardMedia from '@mui/material/CardMedia';
import homeSeriesmainImage from '../asserts/homeseriesImage1.jpg';
import metalshaftliftImage from '../asserts/metalshaftlift.jpg';
import massonaryliftImage from '../asserts/massonarylift.jpg';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Button from '@mui/material/Button';

function HomeSeriesElevationContainer(props) {
  return (
    <Grid container sx={{ height: '175vh', width: '100%', dispaly: 'flex', justifyContent: 'space-between', padding: '10vh 25vh 10vh 25vh', textAlign: 'center', fontFamily: 'Roboto,Sans-serif', color: HeaderColor }}>
      <Grid item sx={{ width: '54%', padding: '10vh 7vh 0vh 0vh' }}>
        <Grid>
          <Grid item>
            <Typography variant='h5' sx={{ padding: '3vh 3vh 1vh 3vh' }}> Home lifts at their best </Typography>
            <Typography variant='body1' sx={{ padding: '3vh 3vh 1vh 3vh' }}>
              Providing Lift products right from small home lifts to large lifts for commercial buildings and public utility
            </Typography>
          </Grid>
          {/* image 1 */}
          <Grid item>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                sx={{ height: '90vh' }}
                image={homeSeriesmainImage}
              />
            </Box>
            <Grid sx={{paddingTop: '15vh'}}>
              <Grid item>
              <Button variant="contained" sx={{ padding: '3vh', fontSize: '0.9rem' }}>Download Broucher</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ width: '45%' }}>
        <Grid>
          {/* image 2 */}
          <Grid item sx={{ paddingBottom: '10vh' }}>
            <Box sx={{ position: 'relative', border: '10px solid #80808070' }}>
              <CardMedia
                sx={{ height: '70vh' }}
                image={massonaryliftImage}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '98%',
                  // height: '100%',
                  // bgcolor: 'rgba(0, 0, 0, 0.54)',
                  // color: 'white',
                  padding: '2% 1% 2% 1%',
                  textAlign: 'start'
                }}
              >
                <Box sx={{ backgroundColor: '#ffffffad', color: '' }}>
                  <Typography variant="h5" sx={{paddingLeft: '2vh'}}>With Masonary Shaft</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* image 3 */}
          <Grid item>
            <Box sx={{ position: 'relative', border: '10px solid #80808070' }}>
              <CardMedia
                sx={{ height: '70vh' }}
                image={metalshaftliftImage}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '98%',
                  // height: '100%',
                  // bgcolor: 'rgba(0, 0, 0, 0.54)',
                  // color: 'white',
                  padding: '2% 1% 2% 1%',
                  textAlign: 'start'
                }}
              >
                <Box sx={{ backgroundColor: '#ffffffad' }}>
                  <Typography variant="h5" sx={{paddingLeft: '2vh'}}>With Metal Shaft</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeSeriesElevationContainer;