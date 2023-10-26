import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/bigbanner.png';
import { HeaderColor, SubHeaderColor } from './Constants';
import StoreIcon from '@mui/icons-material/Store';

function ProjectsContainer(props) {
  return (
    <Grid sx={{ color: HeaderColor, flexDirection: 'column', height: '60vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
      <Grid item sx={{ padding: '4vh' }}>
        <Typography variant='h4'>Our Clients</Typography>
      </Grid>
      <Grid item>
        <Grid sx={{ display: 'flex', justifyContent: 'center', padding: '4vh 1vh 1vh 1vh', color: 'grey' }}>
          <Grid item sx={{ height: '100%', width: '15%' }}>
            <StoreIcon sx={{fontSize: 200}}/>
          </Grid>
          <Grid item sx={{ height: '100%', width: '15%' }}>
          <StoreIcon sx={{fontSize: 200}}/>
          </Grid>
          <Grid item sx={{ height: '100%', width: '15%' }}>
          <StoreIcon sx={{fontSize: 200}}/>
          </Grid>
          <Grid item sx={{ height: '100%', width: '15%' }}>
          <StoreIcon sx={{fontSize: 200}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectsContainer;