import { Grid, Box } from '@mui/material';
import companyprofile from './../asserts/companyprofile.jpg';
import { Paper } from '@mui/material'

function showImage(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <>
      <Grid xs sx={{ width: '50vh', height: '100%', backgroundColor: 'white', padding: '1vh' }}>
        <Box sx={{ height: '66%',padding: '15vh 15vh 15vh 15vh', fontSize: '1rem', color: '#00264d' }}>
          <h2>Company Profile</h2>
          <>Brio ELEVATORS, the pioneer of the Indian Elevator Industry was established in 2022, head quartered in Hyderabad and operating in Pune, Bangalore, Ahmedabad, installs, maintains and modernizes a wide range of elevators which includes, Gearless Machine Room-less Elevators for Passenger, Hospital, Home, Automobile & Freight environments.

            With a Legacy in Vertical Transportation, Brio is known for high quality products and premium services.</>
        </Box>
      </Grid>
      <Grid xs sx={{ height: '100%', backgroundColor: 'white', padding: '1vh' }}>
        {/* <Box sx={{ backgroundColor: 'yellow', height: '100%' }}> */}
        <Paper sx={{ height: '100%', backgroundImage: `url(${companyprofile})`, backgroundSize: 'cover', borderRadius: '1vh' }} />
        {/* </Box> */}
      </Grid>
    </>
  } else {
    return <Grid xs sx={{ width: '100vh', height: '50vh', backgroundColor: 'white', padding: '1vh' }}>
      <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
        About Company
      </Box>
    </Grid>
  }
}

function CompanyProfileContainer(props) {
  return (
    <Grid container sx={{ height: '90vh', backgroundColor: 'orange', alignItems: 'center', color: '#00264d' }}>
      {showImage(props.isDeskTopDevice)}
    </Grid>
  );
}

export default CompanyProfileContainer;