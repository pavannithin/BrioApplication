import React, { useRef, useState } from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import mainimage from "./../asserts/MainPageIamges.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import companyLogo from "./../asserts/companylogo.svg";
import BrioLogoV1 from "./../asserts/BrioLogoV1.png";
import tuv from "./../asserts/tuvImg.png";
import phoneanimation from "./../asserts/phoneanimation.gif";
import tuv2 from "./../asserts/tuv2.png";
import Button from "@mui/material/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SubmitFormDialog from "../components/SubmitFormDialog";
import { css, keyframes } from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { HeaderColor, GoldColor, emailId } from "./Constants";
import MailIcon from "@mui/icons-material/Mail";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './duck.scss';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const styles = {
  paperContainer: {
    backgroundImage: `url(${mainimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "97vh",
    // width: "100%",
  },
};

const onHeaderItemsHover = {
  "&:hover": {
    color: GoldColor,
    cursor: "pointer",
  },
};

const animateBg = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 50% 0%; }
`;

const animatedGradient = {
  animation: css`
    ${animateBg} 1s linear infinite
  `,
  backgroundImage:
    "linear-gradient(90deg,#71c66c,#ff8000,#db5779,#71c66c,#ff8000)",
  backgroundSize: "100% 0%",
};

export default function AppHeader(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const onFreeSiteCheckButtonCLick = () => {
    setOpenDialog(true);
  };

  const onCloseFreeSiteCheckButtonCLick = () => {
    setOpenDialog(false);
  };

  const [headerStyles, setHeaderStyles] = useState({
    display: "flex",
    padding: "1% 3% 1% 3%",
    justifyContent: "space-between",
    maxHeight: { xs: "8%", sm: "8%", md: "11%" },
    backgroundColor: "#faf6ed",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    color: "#104c8a",
    width: "100%",
    zIndex: 999,
    boxShadow:
      "0 8px 18px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  });

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto', color: HeaderColor, fontWeight: 'bold' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowOutwardIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'Products'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowOutwardIcon />
            </ListItemIcon>
            <ListItemText primary={'Products'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'Blogs'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowOutwardIcon />
            </ListItemIcon>
            <ListItemText primary={'Blogs'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'About Us'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowOutwardIcon />
            </ListItemIcon>
            <ListItemText primary={'About Us'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box p='1rem'>
        Follow Us On :
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <YouTubeIcon onClick={() => window.open('https://www.youtube.com/@BrioElevators', "_blank")} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon onClick={() => window.open('https://www.facebook.com/BRIOElevators?mibextid=ZbWKwL', "_blank")} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InstagramIcon onClick={() => window.open('https://www.instagram.com/brioelevators/', "_blank")} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/company/brioelevators/?viewAsMember=true', "_blank")} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PinterestIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  );

  function showFloatButton() {
    return window.scrollY > 30;
  }

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  // const scrollTo = (ref) => {
  //   if (myRef && myRef.current /* + other conditions */) {
  //     myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <>
      {/* Submit Form Dialig */}
      <SubmitFormDialog
        open={openDialog}
        handleClose={onCloseFreeSiteCheckButtonCLick}
        buttonText="Get Free Site Feasibility Check"
        isDeskTopDevice={props.isDeskTopDevice}
      />
      <Box ref={myRef}>
        <Paper style={styles.paperContainer}>
          <Grid sx={{ height: "105vh" }}>

            {/* Header ::: for Desktop*/}
            {/* {
              props.isDeskTopDevice && <Grid sx={headerStyles}>
                <Grid item>
                  <img
                    src={companyLogo}
                    alt="BigCo Inc. logo"
                    style={{ width: "70%" }}
                  />
                </Grid>
                <Grid item>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: { xs: 2, sm: 4, md: 6 },
                    }}
                  >
                    <Grid item sx={onHeaderItemsHover} onClick={executeScroll}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Home</Typography>
                    </Grid>
                    <Grid item sx={onHeaderItemsHover} onClick={() => window.scrollTo({ top: 2668, behavior: "smooth" })}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Products</Typography>
                    </Grid>
                    <Grid item sx={onHeaderItemsHover}>
                      <Grid sx={{ display: "flex", color: GoldColor }}>
                        <Grid item>
                          <CallIcon
                            sx={{ fontSize: 30, paddingRight: "0.5rem" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">
                            <b>+91-9398113939</b>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            } */}
            {
              props.isDeskTopDevice &&
              <Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={BrioLogoV1}
                    height='15%'
                    width='15%'
                    style={{padding: '1rem'}}
                  />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid item>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        columnGap: { xs: 2, sm: 4, md: 6 },
                        color: 'white'
                      }}
                    >
                      <Grid item sx={onHeaderItemsHover} onClick={executeScroll}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '0.1rem' }}>Home</Typography>
                      </Grid>
                      <Grid item sx={onHeaderItemsHover} onClick={() => window.scrollTo({ top: 2668, behavior: "smooth" })}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '0.1rem' }}>Products</Typography>
                      </Grid>
                      <Grid item sx={onHeaderItemsHover} onClick={() => window.scrollTo({ top: 2668, behavior: "smooth" })}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '0.1rem' }}>Blogs</Typography>
                      </Grid>
                      <Grid item sx={onHeaderItemsHover}>
                        <Grid sx={{ display: "flex", color: GoldColor }}>
                          <Grid item>
                            {/* <CallIcon
                              sx={{ fontSize: 30, paddingRight: "0.5rem" }}
                            /> */}
                            <img src={phoneanimation} style={{color: GoldColor, height: '2.5rem', paddingRight: "0.5rem"}}/>
                          </Grid>
                          <Grid item>
                            <Typography variant="h4" sx={{letterSpacing: '0.1rem'}}>
                              <b>+91-9398113939</b>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            }

            {/* Header ::: for Mobile*/}
            {
              !props.isDeskTopDevice && <Grid sx={headerStyles}>
                <Grid item>
                  <Box sx={{ width: { xs: '23vh', sm: '40vh' } }}>
                    <img
                      src={companyLogo}
                      alt="BigCo Inc. logo"
                      style={{ width: "65%" }}
                    />
                  </Box>
                </Grid>
                <Grid item>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: { xs: 2, sm: 4, md: 6 },
                    }}
                  >
                    <Grid item>
                      <MenuIcon onClick={toggleDrawer('right', true)} />
                      <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                      >
                        {list('right')}
                      </Drawer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            }

            {/*Main Heading ::: for both*/}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                height: { xs: "70%", sm: "70%", md: "65%" },
                alignItems: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Grid
                item
                sx={{
                  padding: "1.4rem"
                }}
              >
                <Grid sx={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>
                  {
                    props.isDeskTopDevice && <Grid item>
                      <Typography variant="h2" sx={{ fontFamily: 'Fredericka the Great' }}>
                        BRIO, ELEVATES YOUR EXPECTATIONS
                      </Typography>
                    </Grid>
                  }
                  {
                    !props.isDeskTopDevice && <Grid item>
                      <Typography variant="h4" sx={{ fontFamily: 'Fredericka the Great' }}>
                        BRIO, ELEVATES YOUR EXPECTATIONS
                      </Typography>
                    </Grid>
                  }
                </Grid>
              </Grid>

              <Grid item padding="1rem">
                <Button
                  sx={{ boxShadow: "10px 10px 5px #3930306e" }}
                  variant="contained"
                  onClick={onFreeSiteCheckButtonCLick}
                >
                  <Typography variant="body1">
                    Get Free Site Feasibility <br />Check
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            {/* Text with image ::: for DesckTop */}
            {
              props.isDeskTopDevice &&
              <Grid sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                position: 'absolute',
                bottom: '0',
                right: '0',
                paddingRight: '2rem',
                paddingBottom: '1rem',
                width: { xs: '500px', sm: '500px', md: '500px' }
              }}>
                <Grid item sx={{ padding: '4rem 1rem 3rem 0rem', color: 'black' }}>
                  <Box sx={{
                    border: '1.2px solid #0000009c',
                    padding: '0.2rem',
                    background: '#f0f1f27a',
                    boxShadow: '10px 10px 5px #3930306e'
                  }}>
                    <Grid>
                      <Grid item>
                        <Typography variant="body1"> Certified Home Elevators</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1"> <b>at affortable cost from ITALY</b></Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ width: { xs: '55px', sm: '55px', md: '76px' }, paddingTop: '1rem' }}>
                    <img style={{ width: '80%' }} src={tuv} /></Box>
                </Grid>
              </Grid>
            }
          </Grid>

          {/*Float Button -> Call ::: for both*/}
          {!props.isDeskTopDevice && (
            <Fab
              sx={{
                position: "fixed",
                bottom: 100,
                right: 20,
                backgroundColor: "green",
                height: "3rem",
                width: "3rem",
              }}
              color="blue"
              onClick={executeScroll}
            >
              <LocalPhoneIcon sx={{ height: "2rem", width: "2rem", color: 'white' }} />
            </Fab>
          )}

          {/*Float Button -> UP ::: for both*/}
          {
          // showFloatButton() && (
            <Fab
              sx={{
                position: "fixed",
                bottom: 30,
                right: 40,
                backgroundColor: HeaderColor,
                height: "1rem",
                width: "2.3rem",
              }}
              color="white"
              onClick={executeScroll}
            >
              <UpIcon sx={{ height: "1.7rem", width: "1.7rem", color:"white" }} />
            </Fab>
          // )
          }

          {/*Float Button -> Enqury ::: for both*/}
          <Fab
            sx={{
              position: "fixed",
              bottom: 280,
              right: -35,
              backgroundColor: GoldColor,
              height: "2.5rem",
              width: "7rem",
              transform: 'rotate(90deg)',
              borderRadius: '0'
            }}
            color="blue"
            onClick={onFreeSiteCheckButtonCLick}
            variant="extended"
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: "white" }}>Enquiry</Typography>
          </Fab>

        </Paper>

        {/* bottom strip  ::: for both*/}
        <Box
          sx={{
            height: "16vh",
            backgroundColor: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: '0.6rem 0rem 0.6rem 0rem'
          }}
        >
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid item sx={{ padding: "1rem" }}>
              <Grid sx={{ display: 'flex', columnGap: '1rem', width: '100%', justifyContent: 'center' }}>
                <Grid item sx={{ width: '10%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
                  <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'}
                    height='85%'
                    width='90%'
                    color='#104c8a' />
                </Grid>
                <Grid item>
                  {props.isDeskTopDevice && <Typography variant='h4'
                    sx={{
                      paddingTop: '1.2rem',
                      color: GoldColor,
                      fontWeight: 'bold',
                      fontFamily: 'Abril Fatface',
                      letterSpacing: '0.2rem',
                      lineHeight: '3rem'
                    }}>THE FIRST <span style={{ color: HeaderColor }} className='shineText'>INDO - ITALIAN</span> ELEVATOR COMPANY</Typography>
                  }
                  {!props.isDeskTopDevice && <Typography variant='subtitle1'
                    sx={{
                      color: GoldColor,
                      fontWeight: 'bold',
                      fontFamily: 'Abril Fatface',
                      letterSpacing: '0.2rem',
                      lineHeight: '2rem'
                    }}>THE FIRST <span style={{ color: HeaderColor }} className='shineText'>INDO - ITALIAN</span> ELEVATOR COMPANY</Typography>
                  }
                </Grid>
                <Grid item sx={{ width: '10%', alignContent: 'center' }}>
                  <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'}
                    height='85%'
                    width='90%' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </>
  );
}
