import { Grid, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactUsContainer(props) {
  return (
    <Box container sx={{ display: 'flex', height: '50vh', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', padding: '5vh' }}>
      <Box border='1px solid #00264d' borderRadius='1vh' width='50vh'>
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
              label="Multiline Placeholder"
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
  );
}

export default ContactUsContainer;