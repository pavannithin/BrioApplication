import React from 'react';
import { Grid, Box } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';

function showImage(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <>
      <Grid xs sx={{ width: '100%', height: '48vh', backgroundColor: 'white', textAlign:'center' }}>
        <Paper sx={{ height: '100%', backgroundImage: `url(${companyprofile})`, backgroundSize: 'cover', borderRadius: '2vh' }} >
          <Grid>
            <Grid item sx={{display: 'flex', justifyContent: 'space-evenly', paddingTop: '12%'}}>
              <Box sx={{ color: 'White', fontSize: '1rem'}}><h1>Brio Elevators are Equiped with Integrate Logic Control with Advanced Landing</h1></Box>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    </>
  } else {
    return <Grid xs sx={{ width: '100vh', height: '50vh', backgroundColor: 'white' }}>
      <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
        About Company
      </Box>
    </Grid>
  }
}

function Bigbanner(props) {
  return (
    <Grid container sx={{ height: '50vh', alignItems: 'center', padding: '1vh' }}>
      {showImage(props.isDeskTopDevice)}
    </Grid>
  );
}

export default Bigbanner;