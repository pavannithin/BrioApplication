import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
// import companyprofile from './../asserts/contactus.jpg';
import { GoldColor, HeaderColor, SubHeaderColor } from './Constants';
import stamp from './../asserts/Stamp.png';
import { CardActions, CardContent, CardMedia, CardHeader, CardActionArea } from '@mui/material';
// import productVideo from './../asserts/productVideo.mp4';
import YouTube from 'react-youtube';

function MinPageAboutUsContainer(props) {

  const opts = {

    height: '340',
    width: '600',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      rel: 0,
    },
  };

  const Mblopts = {
    height: '250',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      rel: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // if(!props.isDeskTopDevice) {
    // return (
    //   <Box p='3rem 0rem 0rem 0rem' maxHeight='90vh' width='100%'>
    //     <Grid container sx={{
    //       width: '100%',
    //       dispaly: 'flex',
    //       textAlign: 'center',
    //       flexDirection: 'column',
    //       padding: '2rem 2rem 4rem 2rem',
    //       backgroundColor: '#faf6ed'
    //     }}>
  
    //       <Grid item sx={{paddingBottom: '2rem', width: '100%', textAlign: 'center' }}>
    //         <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center' }}>
    //           {/* <Grid item sx={{ width: '7%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
    //             <img src={
    //               'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} 
    //               height='100%' width='100%' />
    //           </Grid> */}
    //           <Grid item>
    //             <Typography variant='h4' sx={{ paddingTop: '0.5rem', color: GoldColor }}>About Us</Typography>
    //           </Grid>
    //           {/* <Grid item sx={{ width: '7%', alignContent: 'center' }}>
    //             <img src={
    //               'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} 
    //               height='100%' width='100%' />
    //           </Grid> */}
    //         </Grid>
    //       </Grid>
  
    //       <Grid item>
    //         <Grid sx={{ display: 'flex', columnGap: '1rem', flexDirection: 'column' }}>
    //           <Grid item sx={{ 
    //             display: 'flex', 
    //             justifyItems: 'center', 
    //             alignItems: 'center', 
    //             width: '100%' }}>
    //             <Box sx={{ width: '100%' }}>
    //               <YouTube videoId="wdBNBx62D7w" opts={Mblopts} onReady={_onReady} />
    //             </Box>
    //           </Grid>

    //           <Grid item sx={{ 
    //             paddingTop: '2rem', 
    //             overflowX: 'hidden', 
    //           maxHeight: { xs: '55vh', sm: '20vh', md: '43vh' }, 
    //           textAlign: 'start' }}>
    //             <Typography fontFamily= 'Didact Gothic' sx={{ color: SubHeaderColor, fontSize: '1.2rem' }}>
    //               Welcome to Brio Elevators, where innovation meets tradition to redefine the vertical transportation experience. With a remarkable six years of expertise in Elevator Component Sales, we have proudly established ourselves as a pioneering force in the industry. As The first Indo-Italian elevator company, Brio Elevators seamlessly integrates the rich heritage of Italian craftsmanship with the dynamic spirit of innovation from India.
    //               {/* At Brio Elevators, safety is at the core of our values. Our main components, including motors and controllers sourced from Italy, strictly adhere to European standards MD 2006/42/EC and EN-81 41. Committed to excellence, 80% of our main components are imported, meeting the highest European standards, while the remaining 20% is proudly of Indian make, complying with ISO standards (ISO 9001 - 2015). */}
    //               {/* What truly sets us apart is our unique approach to manufacturing. While the core mechanisms are crafted in Italy, we take pride in locally manufacturing designer cabins and shafts in our warehouse.  */}
    //               {/* This dual strategy ensures not only uncompromising safety and quality but also provides us with a competitive edge in meeting diverse design preferences. */}
    //               {/* At Brio Elevators, we are not just an elevator company; we are a symbol of reliability, innovation, and customer satisfaction. Explore the seamless blend of Italian precision and Indian ingenuity as we elevate your vertical transportation experience to new heights. */}
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
  
    //   </Box>
    // );
  // } else {
  return (
    <Box p='0rem 0rem 0rem 0rem' maxHeight='90vh'>
      <Grid container sx={{
        // width: '100%',
        dispaly: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '2rem 2rem 4rem 2rem',
        backgroundColor: '#faf6ed'
      }}>

        <Grid item sx={{ paddingBottom: '4rem', width: '100%', textAlign: 'center' }}>
          <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center' }}>
            {/* <Grid item sx={{ width: '3%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={
                'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} 
                height='90%' width='90%' />
            </Grid> */}
            <Grid item>
              <Typography fontFamily= 'Didact Gothic' variant='h4' sx={{ paddingTop: '0.5rem', color: GoldColor }}>About Us</Typography>
            </Grid>
            {/* <Grid item sx={{ width: '3%', alignContent: 'center' }}>
              <img src={
                'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} 
                height='90%' width='90%' />
            </Grid> */}
          </Grid>
        </Grid>

        <Grid item sx={{ height: '100%', px:{ sm:'2rem',md:'5rem'}}}>
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center'}}>
                <YouTube videoId="wdBNBx62D7w" opts={opts} onReady={_onReady} />
            </Grid>
            <Grid item xs={12} md={6} sx={{ 
                paddingTop: '5rem', 
                width: { sx: '100%', sm: '100%', md: '70%' },
                display: 'flex', 
                justifyItems: 'center',
                textAlign: 'start',
                maxHeight: '40vh',
                overflow:  'hidden'
            }}>
              <Typography variant='h6' sx={{ color: HeaderColor }} fontFamily= 'Didact Gothic'>
                Welcome to <b>Brio Elevators</b>, where innovation meets tradition to redefine the vertical transportation experience. 
                With a remarkable six years of expertise in Elevator Component Sales, we have proudly established ourselves as a 
                pioneering force in the industry. As The <b>first Indo-Italian elevator company</b>, Brio Elevators seamlessly integrates 
                the rich heritage of Italian craftsmanship with the dynamic spirit of innovation from India.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );              
}

// }

export default MinPageAboutUsContainer;