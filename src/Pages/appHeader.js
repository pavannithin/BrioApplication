import { Grid } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
import MenuIcon from '@mui/icons-material/Menu';

function showNavigationDetails(isDeskTopDevice) {
  if (!isDeskTopDevice) {
    return <Grid item sx={{ backgroundColor: 'yellow' }}>
      <MenuIcon />
    </Grid>
  } else {
    return <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        ABOUT
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        HELP
      </Grid>
      <Grid item sx={{ paddingRight: '5vh' }}>
        FOLLOW US
      </Grid>
    </Grid>;
  }
}

export default function AppHeader(props) {
  return (
    <Grid sx={{ height: '50vh', paddingTop: '1vh', backgroundColor: 'azure' }}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between', height: '6vh', backgroundColor: 'green', alignItems: 'center' }}>
        <Grid item sx={{ backgroundColor: 'yellow' }}>
          <AnchorIcon />
        </Grid>
        <Grid item sx={{ backgroundColor: 'yellow' }}>
          {showNavigationDetails(props.isDeskTopDevice)}
        </Grid>
      </Grid>

    </Grid>
  );
}