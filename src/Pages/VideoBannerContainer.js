import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import productVideo from './../asserts/productVideo.mp4';
import { HeaderColor, SubHeaderColor } from './Constants';

function VideoBannerContainer(props) {
  return (
    <Grid sx={{flexDirection: 'column', height: '90vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
      <Grid item>
        
        <video width="100%" height="780" controls>
          <source src={productVideo} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Grid>
    </Grid>
  );
}

export default VideoBannerContainer;