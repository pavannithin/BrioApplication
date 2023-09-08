import { Grid, Box } from '@mui/material';

function ContactUsContainer(props) {
  return (
    <Box container sx={{display: 'flex', height: '50vh', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', padding: '1vh' }}>
      <Grid sx={{alignContent: 'center', alignItems: 'center'}}>
        <Grid item>
          Name : 
        </Grid>
        <Grid item>
          Email :
        </Grid>
        <Grid item>
          Phone Number :
        </Grid>
        <Grid item>
          Submit 
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUsContainer;