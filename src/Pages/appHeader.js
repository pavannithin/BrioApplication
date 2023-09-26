import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import mainimage from './../asserts/MainPageIamges.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import companyLogo from './../asserts/companylogo.png';
// import Paper from 'material-ui/Paper';

function showNavigationDetails(isDeskTopDevice) {
  if (!isDeskTopDevice) {
    return <Grid item sx={{ backgroundColor: 'yellow' }}>
      <MenuIcon />
    </Grid>
  } else {
    return <Grid sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
      <Grid item sx={{ paddingRight: '5vh' }}>
        HOME
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        PRODUCTS
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        SERVICES
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        COMPANY
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        FOLLOW US
      </Grid>
    </Grid>;
  }
}

const styles = {
  paperContainer: {
    backgroundImage: `url(${mainimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '850px',
    width: '100%'
  }
};

function showHeader(isDeskTopDevice) {
  if(isDeskTopDevice) {
return  <img src={companyLogo} alt="BigCo Inc. logo" height='95vh' />
  } else {
    return  <img src={companyLogo} alt="BigCo Inc. logo" height='55vh' />
  }
}

export default function AppHeader(props) {
  return (
    <Box>
      <Paper style={styles.paperContainer}>
        <Grid sx={{ height: '70vh', paddingTop: '7vh', top: '0' }}>
          <Grid sx={{ display: 'flex', padding: '0vh 2vh 0vh 2vh', justifyContent: 'space-between', maxHeight: '13vh', backgroundColor: 'white', alignItems: 'center' }}>
            <Grid item>
             {showHeader(props.isDeskTopDevice)}
            </Grid>
            <Grid item sx={{ color: '#967008' }}>
              {showNavigationDetails(props.isDeskTopDevice)}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}