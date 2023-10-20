import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import mainimage from './../asserts/MainPageIamges.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import companyLogo from './../asserts/companylogo.svg';
import tuv from './../asserts/tuvImg.png';
// import Paper from 'material-ui/Paper';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function showNavigationDetails(isDeskTopDevice) {
  if (!isDeskTopDevice) {
    return <Grid item sx={{ backgroundColor: 'yellow' }}>
      <MenuIcon />
    </Grid>
  } else {
    return <Grid sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
      <Grid item sx={{ paddingRight: '9vh' }}>
        Home
      </Grid>
      <Grid item sx={{ paddingRight: '9vh' }}>
        Products
      </Grid>
      <Grid item sx={{ paddingRight: '9vh' }}>
        About
      </Grid>
      <Grid item sx={{ paddingRight: '9vh' }}>
        Contact Us
      </Grid>
    </Grid>;
  }
}

const styles = {
  paperContainer: {
    backgroundImage: `url(${mainimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%'
  }
};

function showHeader(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <img src={companyLogo} alt="BigCo Inc. logo" style={{height: '33vh'}} />
  } else {
    return <img src={companyLogo} alt="BigCo Inc. logo" height='50vh' />
  }
}

export default function AppHeader(props) {
  return (
    <Box>
      <Paper style={styles.paperContainer}>
        <Grid sx={{ height: '70vh', paddingTop: '7vh', top: '0' }}>
          <Grid sx={{ display: 'flex', padding: '0vh 3vh 0vh 5vh', justifyContent: 'space-between', maxHeight: '11vh', backgroundColor: '#ffffffc4', alignItems: 'center', position: 'sticky', top: '0px', opacity: '2' }}>
            <Grid item>
              {showHeader(props.isDeskTopDevice)}
            </Grid>
            <Grid item sx={{ color: '#104c8a', fontSize: '1rem' }}>
              {showNavigationDetails(props.isDeskTopDevice)}
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', height: '62vh', alignItems: 'center', flexDirection: 'column' }}>
            <Grid item sx={{ backgroundColor: '#39303029', padding: '2vh 20vh 2vh 20vh' }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center'}}>
                <Grid item sx={{paddingRight: '0.8vh'}}>
                <FormatQuoteIcon sx={{color: 'white', transform: 'rotate(180deg)'}}/>
                </Grid>
                <Grid item>
                <Box sx={{ fontSize: '3rem', color: 'white' }}> BRIO, ELEVATES YOUR EXPECTATIONS</Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item padding='2vh'>
              <Button variant="contained" sx={{ paddingRight: '3vh', paddingLeft: '3vh', fontSize: '0.9rem' }}>Get Free Site Feasibility Check</Button>
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'end', height: '24vh', alignItems: 'center', padding: '5vh' }}>
            <Grid item sx={{ padding: '3vh', color: 'black' }}>
              <Box sx={{ border: '1px solid black', padding: '3px 16px 3px 16px', background: '#f0f1f27a' }}><Grid>
                <Grid item>
                  Certified Home Elevators
                </Grid>
                <Grid item>
                  <b>at affortable cost from italy</b>
                </Grid>
              </Grid></Box>
            </Grid>
            <Grid item>
              <Box ><img style={{ height: '10vh', width: '10vh' }} src={tuv} /></Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}