import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';
import { HeaderColor, SubHeaderColor } from './Constants';
import CardMedia from '@mui/material/CardMedia';
import product1 from '../asserts/product1.jpg';
import product2 from '../asserts/product2.jpg';
import product3 from '../asserts/product3.jpg';
import product4 from '../asserts/product4.jpg';

function ProductsElevationContainer(props) {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '6vh 8vh 12vh 8vh' }}>

      <Grid item>
        <Grid sx={{ flexDirection: 'column', height: '128vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
          <Grid item>
            <Typography variant='h4' sx={{ color: HeaderColor, padding: '4vh' }}>Our Products</Typography>
            <Typography variant='h6' sx={{ color: HeaderColor }}>Brio employs Advanced Safety Gears designed for high speeds and  advanced energy saving VVVF
              elevator system. The elevator has sensors that use Multiple
              Infrared Beams to watch the whole doorway. </Typography>
          </Grid>
          <Grid item>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '7vh' }}>
              {/* Prod - 1 */}
              <Grid item sx={{ height: '50%', width: '40%' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '2vh' }}>
                  <Grid item>
                    <CardMedia
                      sx={{ height: '63vh', width: '38vh', borderRadius: '8px' }}
                      image={product1}
                    />
                  </Grid>
                  <Grid item sx={{ padding: '8%' }}>
                    <Typography variant='h6' sx={{ color: HeaderColor }}>BRIO GEARLESS BELT</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Prod - 2 */}
              <Grid item sx={{ height: '50%', width: '40%', paddingTop: '23vh' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '2vh' }}>
                  <Grid item>
                    <CardMedia
                      sx={{ height: '63vh', width: '38vh', borderRadius: '8px' }}
                      image={product2}
                    />
                  </Grid>
                  <Grid item sx={{ padding: '8%' }}>
                    <Typography variant='h6' sx={{ color: HeaderColor }}>BRIO GEARLESS ROPE</Typography></Grid>
                </Grid>
              </Grid>
              {/* Prod - 3 */}
              <Grid item sx={{ height: '50%', width: '40%' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '2vh' }}>
                  <Grid item>
                    <CardMedia
                      sx={{ height: '63vh', width: '38vh', borderRadius: '8px' }}
                      image={product3}
                    />
                  </Grid>
                  <Grid item sx={{ padding: '8%' }}>
                    <Typography variant='h6' sx={{ color: HeaderColor }}>BRIO HYDRAULIC</Typography></Grid>
                </Grid>
              </Grid>
              {/* Prod - 4 */}
              <Grid item sx={{ height: '50%', width: '40%', paddingTop: '23vh' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '2vh' }}>
                  <Grid item>
                    <CardMedia
                      sx={{ height: '63vh', width: '38vh', borderRadius: '8px' }}
                      image={product4}
                    />
                  </Grid>
                  <Grid item sx={{ padding: '8%' }}><Typography variant='h6' sx={{ color: HeaderColor }}>BRIO MOBILITY SERIES</Typography></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant="contained" sx={{ padding: '3vh', fontSize: '1rem' }}>Download Broucher</Button>
      </Grid>

    </Grid>

  );
}

export default ProductsElevationContainer;