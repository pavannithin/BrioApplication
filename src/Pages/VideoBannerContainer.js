import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import productVideo from "./../asserts/Gearless & Hydraulic final.mp4";
import { GoldColor, HeaderColor, SubHeaderColor } from "./Constants";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  CardActionArea,
} from "@mui/material";
import features from './../asserts/features.png';

function VideoBannerContainer(props) {

  if(props.isDeskTopDevice) {
    return (
      <Grid
        sx={{
          flexDirection: "column",
          width: "100%",
          dispaly: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 5rem 3rem 5rem",
          // columnGap: '1rem'
        }}
      >
        <Grid item sx={{
        }}>
          {/* <Card sx={{ }}> */}
          {/* <CardMedia
                sx={{ height: '65vh' }}
                image={features}
              /> */}
          <Paper elevation={10} sx={{ borderRadius: "2rem", padding: '1rem' }}>
            <Typography variant="h2"
              sx={{
                color: 'grey',
                padding: '1.5rem',
                fontFamily: 'Anton, sans-serif',
              }}><span style={{ color: HeaderColor }}>#Brio</span> Equipped With</Typography>
            <img
              src={features}
              alt="BigCo Inc. logo"
              style={{
                height: '100%',
                width: '98%',
                borderRadius: "2rem"
              }}
            />
          </Paper>
  
          {/* </Card> */}
  
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        sx={{
          flexDirection: "column",
          width: "100%",
          dispaly: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 1rem 3rem 1rem",
          // columnGap: '1rem'
        }}
      >
        <Grid item sx={{
        }}>
          {/* <Card sx={{ }}> */}
          {/* <CardMedia
                sx={{ height: '65vh' }}
                image={features}
              /> */}
          <Paper elevation={10} sx={{ borderRadius: "2rem", padding: '1rem' }}>
            <Typography variant="h4"
              sx={{
                color: 'grey',
                padding: '1.5rem',
                fontFamily: 'Anton, sans-serif',
              }}><span style={{ color: HeaderColor }}>#Brio</span> Equipped With</Typography>
            <img
              src={features}
              alt="BigCo Inc. logo"
              style={{
                height: '100%',
                width: '98%',
                borderRadius: "2rem"
              }}
            />
          </Paper>
  
          {/* </Card> */}
  
        </Grid>
      </Grid>
    );
  }
}

export default VideoBannerContainer;
