import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';
import {HeaderColor, SubHeaderColor} from './Constants';

function MinPageAboutUsContainer(props) {
  return (
    <Grid container sx={{height: '50vh', width: '100%', dispaly: 'flex', justifyContent: 'center', padding: '10vh 6vh 10vh 6vh', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
      <Typography variant='h5' sx={{ paddingBottom: '5vh', color: HeaderColor }}>About Us</Typography>
      <Typography variant='body1' sx={{color: SubHeaderColor}}>
        When you choose Brio Elevators, you're adding safety and luxury to your home. It makes your living experience truly Sophisticated. <br />
        Our Home Elevators blend the beautiful designs of India and Italy to create a stylish and captivating experience. You can choose from various customization options, including colors, textures, and upholstery, to perfectly match your home. <br />
        We have a special line of Home Elevators called the Home, Mobility Series made using Top Notch Elevator Technology. These Elevators come in many different configurations to suit almost any need. <br />
        Our Home and Mobility Series elevators are super energy-efficient and quieter than a silent room. We've combined this advanced technology with our careful engineering and love for Italian design to create an Environmentally-friendly and seamlessly integrated solution for your home. Safety and comfort are our top priorities, and you won't find a combination like ours anywhere else. <br />
      </Typography>
    </Grid>
  );
}

export default MinPageAboutUsContainer;