import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

function solutionsFor() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><SupportAgentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Solutions For</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Hassel free support even after sale.</Grid>
    </Grid>
  </Box>
}

function products() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><SupportAgentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Products</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Hassel free support even after sale.</Grid>
    </Grid>
  </Box>
}

function elevatorsAndDesigns() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><AssignmentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Elevators And Designs</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>We provide tax-relief opportunity.</Grid>
    </Grid>
  </Box>
}

function company() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><DownloadIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Company</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Download Broucher.</Grid>
    </Grid>
  </Box>
}

function miscellaneous() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><PhoneCallbackIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><h3>Miscellaneous</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Our executive will get back to you.</Grid>
    </Grid>
  </Box>
}

function CompanyFooterContainer(props) {
  return (
    <Box sx={{ height: '55vh', backgroundColor: '#565454', padding: '4%', color: 'white' }}>

      <Grid item>
        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Grid item sx={{ display: 'contents' }}>
            {solutionsFor()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {products()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {elevatorsAndDesigns()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {company()}
          </Grid>
          <Grid item>
          </Grid>
        </Grid>

      </Grid>
      <Grid item>
        <Grid>
          <Grid item>
            <Divider sx={{ backgroundColor: 'grey' }} />
          </Grid>
          <Grid item>
            <Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1%' }}>
                <Grid item>
                  <YouTubeIcon sx={{ fontSize: 60, padding: '1%' }} />
                </Grid>
                <Grid item>
                  <FacebookIcon sx={{ fontSize: 60, padding: '1%' }} />
                </Grid>
                <Grid item>
                  <InstagramIcon sx={{ fontSize: 60, padding: '1%' }} />
                </Grid>
                <Grid item>
                  <LinkedInIcon sx={{ fontSize: 60, padding: '1%' }} />
                </Grid>
                <Grid item>
                  <PinterestIcon sx={{ fontSize: 60, padding: '1%' }} />
                </Grid>
              </Box>

            </Grid>
          </Grid>
          <Grid item>
            <Divider sx={{ backgroundColor: 'grey' }} />
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}

export default CompanyFooterContainer;