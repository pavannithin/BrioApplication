import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import nopitElevatioinImage from './../asserts/nopitElevatioinImage.jpg';
import { HeaderColor, SubHeaderColor } from './Constants';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import tvuImage from './../asserts/tuvImg.png';
import Button from '@mui/material/Button';

function NoPitElevations(props) {
  return (
    <Box sx={{ height: '90vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '90vh' }}
            image={nopitElevatioinImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: '#E09900',
              backgroundColor: '#021f39f0',
              // padding: '2% 1% 2% 1%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: '3% 1% 1% 1%'
            }}
          >
            <Box sx={{ width: '50%', height: '92%' }}>

              <Box>
                <Typography variant='h5'>Brio's NEW GENERATION lifts</Typography>
              </Box>
              <Grid sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '8%' }}>

                <Grid item sx={{ height: '20vh', width: '46vh', paddingRight: '6vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>No Pit</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Our Home elevators do not require
                            a pit of more than 150 to 250mm</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO HEAD ROOM</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Headroom is meant for commercial
                            elevators. We require an FFL- Ceiling
                            of only 2500mm
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh', paddingRight: '7vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO MACHINE ROOM</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>As per machine directive code,
                            Machine room should never be
                            placed inside the elevator shaft</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO GOVERNMENT LICENSE</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>No government license is required
                            as we consume only single phase
                            electricity power</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO AMC</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Our patented technology allows
                            our client to feel absolutely safe
                            without routine maintenance</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Box>
            <Box sx={{ width: '30%', height: '52%', paddingTop: '8%' }}>

              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Box >
                    <img style={{ height: '15vh', width: '15vh' }} src={tvuImage} />
                    <Typography variant='h6'>TUV Certified <br /> and 100% imported</Typography>
                  </Box>
                </Grid>
                <Grid item sx={{ paddingTop: '10vh' }}>
                  <Button variant="contained" sx={{ height: '8vh', paddingRight: '3vh', paddingLeft: '3vh', fontSize: '1rem', fontWeight: 'bold', backgroundColor: 'white', color: HeaderColor }}>Book an Appointment</Button>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Box>
      </Card>
    </Box >
  );
}

export default NoPitElevations;