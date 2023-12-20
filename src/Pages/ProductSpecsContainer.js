import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { HeaderColor } from './Constants';

function showSubmitForm() {
  return <Box container sx={{ display: 'flex', height: '45vh', alignItems: 'center', justifyContent: 'center' }}>
    <Box border='3px solid #c9c5b7' borderRadius='1vh' width='40vh'>
      <Grid sx={{ alignContent: 'center', alignItems: 'center' }}>
        <Grid item padding='2vh'>
          <TextField
            variant="outlined" size="medium"
            id="filled-search"
            label="Name"
            type="search"
            fullWidth
          // variant="filled"
          />
        </Grid>
        <Grid item padding='2vh'>
          <TextField
            id="filled-search"
            label="Email Id"
            type="search"
            fullWidth
            variant="outlined" size="medium"
          />
        </Grid>
        <Grid item padding='2vh'>
          <TextField
            id="filled-search"
            label="Phone Number"
            type="search"
            fullWidth
            variant="outlined" size="medium"
          />
        </Grid>
        <Grid item padding='2vh'>
          <TextField
            id="outlined-textarea"
            label="Type query here...."
            placeholder="Type your query"
            maxRows={4}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item padding='2vh'>
          <Button variant="contained" fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
}

function ExpertiseInGearLess() {
  return <Grid container>
      <Grid item  sx={{ width:'100%', display: 'flex', justifyContent: 'center' }}><EngineeringIcon sx={{ fontSize: '4rem' }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>
        <Typography variant='h6' fontFamily= 'Didact Gothic' color={HeaderColor}>Expertise In GearLess</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', color: '#00264d', fontFamily: 'Didact Gothic' }}>
        Through our expertise in engineering. We have developed a high-quality gearless home elevator. 
        The result is a high-performance addition to your home that you can hardly hear, even when you put your ear 
        right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome 
        elevator.</Grid>
    </Grid>
}

function EnergyEffecient() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', fontSize: '0.8rem' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><TipsAndUpdatesIcon sx={{ fontSize: '4rem' }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>
      <Typography variant='h6' fontFamily= 'Didact Gothic' color={HeaderColor}>Energy Efficient</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', color: '#00264d', fontFamily: 'Didact Gothic' }}>In today's world, energy efficiency is paramount, and Brio Elevators stands at the forefront of Evolutionizing vertical Transportation by prioritizing sustainability. Our Elevators are Engineered to not only elevate people but also Elevate energy efficiency to new heights.</Grid>
    </Grid>
  </Box>
}

function ProgressiveSafetyGear() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', fontSize: '0.8rem' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><TipsAndUpdatesIcon sx={{ fontSize: '4rem' }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>
      <Typography variant='h6' fontFamily= 'Didact Gothic' color={HeaderColor}>Reliable solutions</Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', color: '#00264d', fontFamily: 'Didact Gothic' }}>In case of a power failure, our home elevators will continue to work from a battery, allowing the user to reach the ground floor safely. It is also possible to connect a Fire Alarm System to the main Electronic Board.</Grid>
    </Grid>
  </Box>
}

function AutomatedResuceDevice() {
  return <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><PsychologyIcon sx={{ fontSize: '4rem' }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>
      <Typography variant='h6' fontFamily= 'Didact Gothic' color={HeaderColor}>Intelligent control systems</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'start', color: '#00264d', fontFamily: 'Didact Gothic' }}>Our Elevators are equipped with Intelligent Control Systems that adapt to usage patterns. They optimize elevator operation by predicting passenger demand, reducing unnecessary stops, and minimizing idle time, all while conserving energy.</Grid>
    </Grid>
  </Box>
}

function ProductSpecsContainer(props) {
  return (
    <Grid container sx={{ backgroundColor: '#faf6ed', 
    display: 'flex', p:{sm:'2rem 1rem',md: '4rem 2rem'}, width: 'auto',
     justifyContent: 'space-around', border: '1px solid white', padding: '0 2rem 0 2rem' }}>
      <Grid item sm={6} md={3} sx={{ display: 'contents' }}>
        {ExpertiseInGearLess()}
      </Grid>
      
      <Grid item sm={6} md={3} sx={{ display: 'contents' }}>
        {EnergyEffecient()}
      </Grid>
     
      <Grid item sm={6} md={3} sx={{ display: 'contents' }}>
        {AutomatedResuceDevice()}
      </Grid>
      <Grid item sm={6} md={3} sx={{ display: 'contents' }}>
        {ProgressiveSafetyGear()}
      </Grid>
    </Grid>
  );
}

export default ProductSpecsContainer;