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
        padding: "6rem 1rem 1rem 1rem",
        columnGap: '1rem'
      }}
    >
      <Grid item sx={{ borderRadius: "2rem", backgroundColor: "#faf6ed" }}>
        <Card sx={{ boxShadow: "none" }}>
        <CardMedia
              sx={{ height: '65vh' }}
              image={features}
            />
        </Card>
      </Grid>
    </Grid>
  );
    }
}

export default VideoBannerContainer;
