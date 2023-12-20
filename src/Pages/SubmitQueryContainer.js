import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
// import companyprofile from './../asserts/bigbanner.png';
import { GoldColor } from './Constants';
import nopitElevatioinImage from './../asserts/contactus.png';
import mailCartoon from './../asserts/mailCartoon.png';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function SubmitQueryContainer(props) {

  if (props.isDeskTopDevice) {
    return (
      <Box sx={{
        // height: '70vh',
        width: '100%',
        // dispaly: 'flex', 
        // justifyContent: 'center', 
        textAlign: 'center',
        // paddingTop: '6rem'
      }}>

        <Grid container sx={{
          display: 'flex',
          flexDirection: 'row',
          // justifyContent: 'center',
          textAlign: 'center',
          flexGrow: 1,
          backgroundColor: '#0a5a7880',
          height: '100%'
        }}>
          <Grid md={6} item sx={{ display: 'flex', justifyContent: 'start' }}>
            <img
              src={nopitElevatioinImage}
              height='100%'
              width='75%'
            />
          </Grid>
          <Grid item md={6} sx={{ paddingTop: '5rem' }}>

            <Paper sx={{ width: '60%', backgroundColor: '#0a5a7891', borderRadius: '0.5rem', border: '2px solid #03405791'}} elevation={8}>
              <Box sx={{ padding: '1.5rem' }}>

                <Typography variant='h4' sx={{ padding: '1rem', color: '#06455d', fontFamily: 'Bree Serif' }}> Request Call Back</Typography>
                <input
                  type='text'
                  placeholder='Name'
                  style={{
                    height: '2rem',
                    width: '80%',
                    fontSize: '1rem',
                    padding: '0.2rem',
                    borderRadius: '0.5rem'
                  }} />
                <Box sx={{ padding: '8px' }} />

                <input
                  type='text'
                  placeholder='Contact Number'
                  style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                <Box sx={{ padding: '8px' }} />

                <input
                  type='text'
                  placeholder='City'
                  style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                <Box sx={{ padding: '10px' }} />

                <input
                  type='email'
                  placeholder='Email Id'
                  style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                <Box sx={{ padding: '10px' }} />

                <textarea name="message" placeholder='Enter your query'
                  style={{ fontSize: '1.1rem', height: '10vh', width: '80%', borderRadius: '0.5rem' }} />

                <Box sx={{ padding: '1rem' }} />

                <Button variant="contained" sx={{ width: '50%', boxShadow: '10px 10px 5px #3930306e', padding: '0.5rem', fontSize: '1rem', borderRadius: '1.5rem', backgroundColor: GoldColor }}>
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box >
    );
  } else {
    return (
      <Box sx={{
        height: '70vh',
        // width: '100%',
        // dispaly: 'flex', 
        // justifyContent: 'center', 
        textAlign: 'center',
        paddingTop: '4rem'
      }}>
        <Card>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              sx={{ height: '70vh' }}
              image={nopitElevatioinImage}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '100%',
                height: '85%',
                // bgcolor: 'rgba(0, 0, 0, 0.54)',
                color: GoldColor,
                // color: 'white',
                // backgroundColor: '#021f39f0',
                // backgroundColor: '#000000cf',
                // padding: '2% 1% 2% 1%',
                display: 'flex',
                justifyContent: 'center',
                // flexDirection: 'row',
                // justifyContent: 'space-around',
                padding: '8rem 0rem 0rem 0rem',
                // opacity: '0.99'
              }}
            >
              <Box sx={{ width: '100%', height: '75%' }}>
                <Typography variant='h4' sx={{ color: GoldColor }}>
                  {/* Contact us for further information */}
                </Typography>
                <Box sx={{ padding: '0rem 0rem 0rem 0rem' }}>

                  <input
                    type='text'
                    placeholder='Name'
                    style={{
                      height: '2rem',
                      width: '80%',
                      fontSize: '1rem',
                      padding: '0.2rem',
                      borderRadius: '0.5rem'
                    }} />

                  <Box sx={{ padding: '10px' }} />
                  <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <Grid item>
                      <input
                        type='text'
                        placeholder='Contact Number'
                        style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                    </Grid>
                    <Box sx={{ padding: '8px' }} />
                    <Grid item>

                      <input
                        type='text'
                        placeholder='City'
                        style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                    </Grid>
                  </Grid>

                  <Box sx={{ padding: '10px' }} />
                  <input
                    type='email'
                    placeholder='Email Id'
                    style={{ height: '2rem', width: '80%', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                  <Box sx={{ padding: '10px' }} />

                  {/* <textarea name="message" placeholder='Enter your query' 
                  style={{ fontSize: '1.1rem', height: '16vh', width: '75vh', borderRadius: '0.5rem' }} /> */}

                  {/* <Box sx={{ padding: '1rem' }} /> */}
                  {/* <input name='Submit' type='submit' style={{ height: '6vh', width: '36vh', fontSize: '1.4rem' }} /> */}
                  <Button variant="contained" sx={{ width: '50%', boxShadow: '10px 10px 5px #3930306e', padding: '0.5rem', fontSize: '1rem', borderRadius: '1.5rem', backgroundColor: GoldColor }}>
                    Submit
                  </Button>
                </Box>
              </Box>


            </Box>
          </Box>
        </Card>
      </Box >
    );
  }

}

export default SubmitQueryContainer;