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
    <Paper sx={{ height: '75vh', backgroundImage: `url(${props.item.description})`, backgroundSize: 'cover', borderRadius: '1vh' }}>
      <Box sx={{ height: '80%', padding: '1%', color: '#00264d' }}><Box sx={{ backgroundColor: 'antiquewhite', width: '50%', paddingLeft: '2%', opacity: '0.9', borderRadius: '1vh' }}><h1>{props.item.name}</h1></Box></Box>
      <Box sx={{ backgroundColor: 'antiquewhite', width: '100%', paddingLeft: '65%', opacity: '0.6' }}><Box sx={{ alignContent: 'center' }}><h2>{props.item.buttonDesc}</h2></Box></Box>
    </Paper>
  )
}

function ItemsV2(props) {
  return (
    <Paper sx={{ height: '70vh', backgroundSize: 'cover', borderRadius: '1vh', color: '#00264d' }}>
      {/* <Box sx={{ height: '80%', padding: '1%', color: '#00264d' }}><Box sx={{ backgroundColor: 'antiquewhite', width: '50%', paddingLeft: '2%', opacity: '0.9', borderRadius: '1vh' }}><h1>{props.item.name}</h1></Box></Box> */}
      {/* <Box sx={{ backgroundColor: 'antiquewhite', width: '100%', paddingLeft: '65%', opacity: '0.6' }}><Box sx={{ alignContent: 'center' }}><h2>{props.item.buttonDesc}</h2></Box></Box> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '25%' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}>
          <Grid item><h3>{props.item.title}</h3></Grid>
          <Grid item><h5>{props.item.subTitle}</h5></Grid>
          <Grid sx={{ border: '1px solid black', borderRadius: '1vh', width: 'fit-content', padding: '2%' }}>KNOW MORE</Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

function ItemsV3(props) {
  return (
    <Paper sx={{ height: '70vh', backgroundImage: `url(${props.item.image})`, backgroundSize: 'cover', borderRadius: '1vh' }}>
      {/* <Box sx={{ height: '80%', padding: '1%', color: '#00264d' }}><Box sx={{ backgroundColor: 'antiquewhite', width: '50%', paddingLeft: '2%', opacity: '0.9', borderRadius: '1vh' }}><h1>{props.item.name}</h1></Box></Box> */}
      {/* <Box sx={{ backgroundColor: 'antiquewhite', width: '100%', paddingLeft: '65%', opacity: '0.6' }}><Box sx={{ alignContent: 'center' }}><h2>{props.item.buttonDesc}</h2></Box></Box> */}
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

function showTransmissionV2(isDeskTopDevice, deskTopitems, mobileitems) {
  if (!isDeskTopDevice) {
    return mobileitems.map((item, i) => <Items key={i} item={item} />)
  } else {
    return deskTopitems.map((item, i) =>
      <Grid container spacing={1}>
        {
          i / 2 === 0 && <>
            <Grid item xs>
              <ItemsV2 key={i} item={item} />
            </Grid>
            <Grid item xs>
              <ItemsV3 key={i} item={item} />
            </Grid>
          </>
        }
        {
          i / 2 !== 0 && <>
            <Grid item xs>
              <ItemsV3 key={i} item={item} />
            </Grid>
            <Grid item xs>
              <ItemsV2 key={i} item={item} />
            </Grid>
          </>
        }
      </Grid>)
  }
}

function ProductsContainer(props) {

  var deskTopitemsV2 = [
    {
      title: "Next Generation# BRIO HOME SERIES",
      subTitle: 'Next Generation# BRIO HOME SERIES',
      image: AutomaticElevators
    },
    {
      title: "BRIO GEARLESS ROPE ELEVATOR",
      subTitle: 'Next Generation# BRIO HOME SERIES',
      image: AutomaticElevators
    },
    {
      title: "BRIO GEARLESS BELT ELEVATOR",
      subTitle: 'Next Generation# BRIO HOME SERIES',
      image: AutomaticElevators
    },
    {
      title: "BRIO HYDRAULIC ELEVATOR",
      subTitle: 'Next Generation# BRIO HOME SERIES',
      image: AutomaticElevators
    },
    {
      title: "BRIO MOBILITY SERIES",
      subTitle: 'Next Generation# BRIO HOME SERIES',
      image: AutomaticElevators
    }
  ]

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
    <Grid sx={{ height: '70vh', paddingTop: '8vh',  paddingBottom: '8vh' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '5vh', color: '#053566', fontSize: '1.7rem' }}>
        Our NEXT GENERATION Elevators
      </Grid>
      <Grid item sx={{ height: '80vh', padding: '1vh' }}>
        <Carousel
          indicatorIconButtonProps={{
            style: {
              display: 'none'
            }
          }}
          next={() => {/* Do stuff */ }}
          prev={() => {/* Do other stuff */ }}
          indicatorContainerProps={{
            style: {
              // display: 'none'
            }
          }}
          animation={'slide'}
          duration="10"
          autoPlay={true}
        >
          {/* {showTransmissionV2(props.isDeskTopDevice, deskTopitems, mobileitems)} */}
          {showTransmissionV2(props.isDeskTopDevice, deskTopitemsV2, deskTopitemsV2)}
        </Carousel>
      </Grid>
    </Grid>

  );
}

export default ProductsContainer;