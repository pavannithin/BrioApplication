import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item paddingLeft='4vh'>
        <h2> Contact details</h2>
      </Grid> */}
      {/* <Grid item><img height='100vh' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid> */}
      {/* <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><EngineeringIcon sx={{ fontSize: 80 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Expertise In GearLess</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome elevator.</Grid>
    </Grid>
  </Box>
}

function EnergyEffecient() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item paddingLeft='4vh'>
        <h2> Contact details</h2>
      </Grid> */}
      {/* <Grid item><img height='100vh' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid> */}
      {/* <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><TipsAndUpdatesIcon sx={{ fontSize: 80 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Energy Effecient</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome elevator.</Grid>
    </Grid>
  </Box>
}

function PrecisePositioningTech() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item paddingLeft='4vh'>
        <h2> Contact details</h2>
      </Grid> */}
      {/* <Grid item><img height='100vh' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid> */}
      {/* <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><TipsAndUpdatesIcon sx={{ fontSize: 80 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Expertise In GearLess</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome elevator.</Grid>
    </Grid>
  </Box>
}

function ProgressiveSafetyGear() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item paddingLeft='4vh'>
        <h2> Contact details</h2>
      </Grid> */}
      {/* <Grid item><img height='100vh' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid> */}
      {/* <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><TipsAndUpdatesIcon sx={{ fontSize: 80 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Progressive Safety Gear</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome elevator.</Grid>
    </Grid>
  </Box>
}

function AutomatedResuceDevice() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item paddingLeft='4vh'>
      <h2> Contact details</h2>
    </Grid> */}
      {/* <Grid item><img height='100vh' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid> */}
      {/* <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><PsychologyIcon sx={{ fontSize: 80 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Automated Resuce Device</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Through our expertise in engineering. We have developed a high-quality gearless home elevator. The result is a high-performance addition to your home that you can hardly hear, even when you put your ear right next to the walls. Select furnishing from our beautiful cabin styles and options and you've got the perfecthome elevator.</Grid>
    </Grid>
  </Box>
}

function ProductSpecsContainer(props) {
  return (
    <Grid sx={{ display: 'flex', height: '55vh', justifyContent: 'space-around', border: '1px solid white', borderRadius: '1vh', backgroundColor: 'white', padding:'1%' }}>
      <Grid item sx={{ display: 'contents' }}>
        {ExpertiseInGearLess()}
      </Grid>
      <Grid item>
      </Grid>
      <Grid item sx={{ display: 'contents' }}>
        {EnergyEffecient()}
      </Grid>
      <Grid item>
      </Grid>
      {/* <Grid item sx={{ display: 'contents' }}>
        {PrecisePositioningTech()}
      </Grid>
      <Grid item>
      </Grid> */}
      <Grid item sx={{ display: 'contents' }}>
        {AutomatedResuceDevice()}
      </Grid>
      <Grid item sx={{ display: 'contents' }}>
        {ProgressiveSafetyGear()}
      </Grid>
    </Grid>
  );
}

export default ProductSpecsContainer;