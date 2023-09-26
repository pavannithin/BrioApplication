import { Grid, Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import AutomaticElevators from './../asserts/automaticElevator.png';
import ChairElevators from './../asserts/chair_elevators.png';
import GlassElevator from './../asserts/glassElevator.png';
import HydraulicElevator from './../asserts/HydrolicElevator.png';
import ResidentialElevators from './../asserts/residensialElevator.png';
import StainlessSteel1 from './../asserts/stainlessSteelEvevator.png';
import RoundGlass from './../asserts/roundGlassElevator.png';
import StainlessSteel2 from './../asserts/stainlesssteelElevators2.png';

function Items(props) {
  return (
    <Paper sx={{ height: '53vh', backgroundImage: `url(${props.item.description})`, backgroundSize: 'cover', borderRadius: '1vh' }}>
      <Box sx={{ height: '80%', padding: '1%', color: '#00264d' }}><Box sx={{backgroundColor: 'antiquewhite', width:'50%', paddingLeft: '2%', opacity: '0.9', borderRadius: '1vh'}}><h1>{props.item.name}</h1></Box></Box>
      <Box sx={{ backgroundColor: 'antiquewhite', width: '100%', paddingLeft: '65%', opacity: '0.6' }}><Box sx={{ alignContent: 'center' }}><h2>{props.item.buttonDesc}</h2></Box></Box>
    </Paper>
  )
}

function showTransmission(isDeskTopDevice, deskTopitems, mobileitems) {
  if (!isDeskTopDevice) {
    return mobileitems.map((item, i) => <Items key={i} item={item} />)
  } else {
    return deskTopitems.map((item, i) => <Grid container spacing={1}><Grid item xs><Items key={i} item={item[0]} /></Grid> <Grid item xs><Items key={i} item={item[1]} /></Grid></Grid>)
  }
}
function ProductsContainer(props) {
  var deskTopitems = [
    [
      {
        name: "Automatic Elevators",
        description: AutomaticElevators,
        buttonDesc: "Know More.."
      },
      {
        name: "Chair Elevators",
        description: ChairElevators,
        buttonDesc: "Know More.."
      }
    ]
    ,
    [
      {
        name: "Glass Elevators",
        description: GlassElevator,
        buttonDesc: "Know More.."
      },
      {
        name: "Hydraulic Elevators",
        description: HydraulicElevator,
        buttonDesc: "Know More.."
      }
    ],
    [
      {
        name: "Residential Elevators",
        description: ResidentialElevators,
        buttonDesc: "Know More.."
      },
      {
        name: "Stainless Steel #1",
        description: StainlessSteel1,
        buttonDesc: "Know More.."
      }
    ],
    [
      {
        name: "Round Glass Elevators",
        description: RoundGlass,
        buttonDesc: "Know More.."
      },
      {
        name: "Stainless Steel #2",
        description: StainlessSteel2,
        buttonDesc: "Know More.."
      }
    ],
    [
      {
        name: "Residential Elevators",
        description: ResidentialElevators,
        buttonDesc: "Know More.."
      },
      {
        name: "Stainless Steel #1",
        description: StainlessSteel1,
        buttonDesc: "Know More.."
      }
    ]
  ]

  var mobileitems = [

    {
      name: "Automatic Elevators",
      description: "AutomaticElevators",
      buttonDesc: "Know More.."
    },
    {
      name: "Chair Elevators",
      description: "ChairElevators",
      buttonDesc: "Know More.."
    }

    ,

    {
      name: "Glass Elevators",
      description: "GlassElevator",
      buttonDesc: "Know More.."
    },
    {
      name: "Hydraulic Elevators",
      description: "HydraulicElevator",
      buttonDesc: "Know More.."
    }
    ,

    {
      name: "Residential Elevators",
      description: "ResidentialElevators",
      buttonDesc: "Know More.."
    },
    {
      name: "Stainless Steel #1",
      description: "StainlessSteel#1",
      buttonDesc: "Know More.."
    }
    ,

    {
      name: "Round Glass Elevators",
      description: "RoundGlass",
      buttonDesc: "Know More.."
    },
    {
      name: "Stainless Steel #2",
      description: "StainlessSteel#2",
      buttonDesc: "Know More.."
    }
    ,

    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!",
      buttonDesc: "Know More.."
    },
    {
      name: "Random Name #22",
      description: "Hello World!",
      buttonDesc: "Know More.."
    }

  ]

  return (
    <Grid sx={{ height: '60vh', paddingTop: '1vh' }}>
      <Grid item sx={{ height: '55vh', padding: '1vh' }}>
        <Carousel
          next={() => {/* Do stuff */ }}
          prev={() => {/* Do other stuff */ }}
        >
          {showTransmission(props.isDeskTopDevice, deskTopitems, mobileitems)}
        </Carousel>
      </Grid>
    </Grid>

  );
}

export default ProductsContainer;