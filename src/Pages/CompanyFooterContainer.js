import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { HeaderColor, GoldColor, emailId } from "./Constants";
import MailIcon from "@mui/icons-material/Mail";
import footerImg from '../asserts/footerBrio.png';
import PlaceIcon from '@mui/icons-material/Place';

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

  if (props.isDeskTopDevice) {
    return (
      <Box sx={{ height: '30vh', backgroundColor: '#000000b0', color: '#c1bcbc', fontFamily: 'Didact Gothic' }}>

        <Grid sx={{ display: 'flex', flexDirection: 'row', padding: '2rem', columnGap: '6%', flexGrow: 1, justifyContent: 'space-around' }}>

          <Grid item>
            <Box height={'9rem'}>
              {/* <Typography variant='h4' fontFamily='Didact Gothic'>Brio Elevators</Typography> */}
              <img
                src={footerImg}
                alt="BigCo Inc. logo"
                style={{ width: "50%", height: '50%' }}
              />
               
              <Typography variant='h6' color='white' fontFamily='Didact Gothic'>Head Quarters :</Typography>
              <Divider color='grey' width='60%' sx={{ padding: '0.03rem' }} />
              <Typography variant='subtitle1' fontFamily='Didact Gothic'> <PlaceIcon sx={{ fontSize: 16, color: GoldColor }} /> 6st Floor, Plot Number 17, <br />
                Road Number 7, Near Jubilee Hills Metro Station<br />
                Rd no. 5, Hyderabad, Telangana, 500033
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem', fontFamily: 'Didact Gothic' }}>
              <Typography variant='h6' color='white' fontFamily='Didact Gothic'>Currenlty operating at</Typography>
              <Divider color='grey' width='100%' sx={{ padding: '0.05rem' }} />
              <Typography variant='subtitle1' fontFamily='Didact Gothic'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Hyderabad</Typography>
              <Typography variant='subtitle1' fontFamily='Didact Gothic'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Vijayawada</Typography>
              <Typography variant='subtitle1' fontFamily='Didact Gothic'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Bangalore</Typography>
              <Typography variant='subtitle1' fontFamily='Didact Gothic'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Chennai</Typography>
              <Typography variant='subtitle1' fontFamily='Didact Gothic'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Kochi</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem' }}>
              <Typography variant='h6' color='white' fontFamily='Didact Gothic'>Quick Links</Typography>
              <Divider color='grey' width='100%' sx={{ padding: '0.05rem' }} />
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Home</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Products</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>About Us</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Contact Us</a></Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem', textAlign: 'start' }}>
              <Typography variant='h6' color='white' fontFamily='Didact Gothic'>Follow Us</Typography>
              <Divider color='grey' width='100%' sx={{ padding: '0.05rem' }} />
              <Grid item sx={{ width: '6%' }}>
                <Grid sx={{ display: 'flex' }}>
                  <Grid item>
                    <YouTubeIcon sx={{ fontSize: '1.5rem', padding: '0.4rem', cursor: 'pointer' }}
                      onClick={() => window.open('https://www.youtube.com/@BrioElevators', "_blank")} />
                  </Grid>
                  <Grid item>
                    <FacebookIcon sx={{ fontSize: '1.5rem', padding: '0.4rem', cursor: 'pointer' }}
                      onClick={() => window.open('https://www.facebook.com/BRIOElevators?mibextid=ZbWKwL', "_blank")}
                    />
                  </Grid>
                  <Grid item>
                    <InstagramIcon sx={{ fontSize: '1.5rem', padding: '0.4rem', cursor: 'pointer' }}
                      onClick={() => window.open('https://www.instagram.com/brioelevators/', "_blank")}
                    />
                  </Grid>
                  <Grid item>
                    <LinkedInIcon sx={{ fontSize: '1.5rem', padding: '0.4rem', cursor: 'pointer' }}
                      onClick={() => window.open('https://www.linkedin.com/company/brioelevators/?viewAsMember=true', "_blank")}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ padding: '0.5rem', fontSize: '1rem', textAlign: 'center', backgroundColor: '#9b9494', color: 'white' }}>Copyrights ©2023 Brio Elevators. All Rights Reserved</Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ backgroundColor: '#000000b0', color: '#c1bcbc' }}>

        <Grid sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          rowGap: '2rem',
          flexGrow: 1,
          justifyContent: 'space-around'
        }}>

          <Grid item>
            <Box>
              {/* <Typography variant='h4'>Brio Elevators</Typography> */}
              <img
                src={footerImg}
                alt="BigCo Inc. logo"
                style={{ width: "40%", height: '50%' }}
              />
              <Typography variant='h6' color='white'>Head Quarters :</Typography>
              <Divider color='grey' width='60%' sx={{ padding: '0.03rem' }} />
              <Typography variant='subtitle1'> <PlaceIcon sx={{ fontSize: 18, color: GoldColor }} /> 6st Floor, Plot Number 17, <br />Road Number 7, Near Jubilee Hills Metro Station<br /> Rd no. 5, Hyderabad, Telangana, 500033
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem' }}>
              <Typography variant='h6' color='white'>Currenlty operating at</Typography>
              <Typography variant='subtitle1'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Hyderabad</Typography>
              <Typography variant='subtitle1'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Vijayawada</Typography>
              <Typography variant='subtitle1'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Bangalore</Typography>
              <Typography variant='subtitle1'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Chennai</Typography>
              <Typography variant='subtitle1'><PlaceIcon sx={{ fontSize: 16, color: GoldColor }} />Kochi</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem' }}>
              <Typography variant='h6' color='white'>Quick Links</Typography>
              <Typography variant='subtitle1'><a id='' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Home</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Products</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>About Us</a></Typography>
              <Typography variant='subtitle1'><a href='#' style={{ color: 'white', textDecoration: 'none', color: '#c1bcbc' }}>Contact Us</a></Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ paddingTop: '1rem' }}>
              <Typography variant='h6' color='white'>Follow Us</Typography>
              <Grid item sx={{ width: '6%' }}>
                <Grid sx={{ display: 'flex' }}>
                  <Grid item>
                    <YouTubeIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }}
                      onClick={() => window.open('https://www.youtube.com/@BrioElevators', "_blank")} />
                  </Grid>
                  <Grid item>
                    <FacebookIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                  </Grid>
                  <Grid item>
                    <InstagramIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                  </Grid>
                  <Grid item>
                    <LinkedInIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                  </Grid>
                  <Grid item>
                    <PinterestIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          fontSize: '1rem',
          textAlign: 'center',
          backgroundColor: '#9b9494',
          color: 'white',
          padding: '0.5rem'
        }}>Copyrights ©2023 Brio Elevators. All Rights Reserved</Box>
      </Box>
    );
  }
}

export default CompanyFooterContainer;