import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/bigbanner.png';
import { HeaderColor, SubHeaderColor } from './Constants';
import nopitElevatioinImage from './../asserts/contactus.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlaceIcon from '@mui/icons-material/Place';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function SubmitQueryContainer(props) {
  return (
    <Box sx={{ height: '90vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'Roboto,Sans-serif' }}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '90vh' }}
            image={nopitElevatioinImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              // color: '#E09900',
              color: 'white',
              backgroundColor: '#021f39f0',
              // padding: '2% 1% 2% 1%',
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'space-around',
              padding: '3% 1% 1% 1%',
              opacity: '0.9'
            }}
          >
            <Box sx={{ width: '65%', height: '92%' }}>
              <Typography variant='h4'>
                Contact us for further information
              </Typography>
              <Box sx={{ padding: '7vh 1vh 1vh 10vh' }}>
                <input
                  type='text'
                  placeholder='Name'
                  style={{ height: '5vh', width: '74vh', fontSize: '1.5rem', padding: '5px' }} />
                <Box sx={{ padding: '10px' }} />
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Grid item>
                    <input
                      type='text'
                      placeholder='Contact Number'
                      style={{ height: '5vh', width: '35vh', fontSize: '1.5rem', padding: '6px' }} />
                  </Grid>
                  <Box sx={{ padding: '8px' }} />
                  <Grid item>
                    <input
                      type='text'
                      placeholder='City'
                      style={{ height: '5vh', width: '35vh', fontSize: '1.5rem', padding: '6px' }} />
                  </Grid>
                </Grid>
                <Box sx={{ padding: '10px' }} />
                <input
                  type='email'
                  placeholder='Email Id'
                  style={{ height: '5vh', width: '74vh', fontSize: '1.5rem', padding: '5px' }} />
                <Box sx={{ padding: '10px' }} />
                <textarea name="message" placeholder='Enter your query' style={{ fontSize: '1.4rem', height: '16vh', width: '75vh' }} />
                <Box sx={{ padding: '20px' }} />
                <input name='Submit' type='submit' style={{ height: '6vh', width: '36vh', fontSize: '1.4rem' }} />
              </Box>
            </Box>
            <Box sx={{ width: '25%', height: '92%' }}>
              <Box sx={{ paddingTop: '11vh' }}>
                <Typography variant='h5'> We are currenlty operating in </Typography>
                <Box sx={{ padding: '5vh 15vh 5vh 15vh' }}>
                  <TableContainer sx={{ maxHeight: '92%', border: 'unset' }}>
                    <Table>
                      <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Hyderabad</Typography>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Vijayawada</Typography>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Bangalore</Typography>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Chennai</Typography>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                </Box>

              </Box>
              <Box sx={{ padding: '20px' }} />
              <Box>
              <Typography variant='h5'>
                Contact us on
              </Typography>
              <Typography variant='h3'>
                1000001000001
              </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box >
  );
}

export default SubmitQueryContainer;