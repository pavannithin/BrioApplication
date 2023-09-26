import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Pages/appHeader';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CompanyProfileContainer from './Pages/CompanyProfileContainer';
import ProductsContainer from './Pages/ProductsContainer';
import { useMediaQuery } from 'react-responsive';
import ContactUsContainer from './Pages/ContactUsContainer'
import Bigbanner from './Pages/BigbannerContainer';
import CompanyFooterContainer from './Pages/CompanyFooterContainer';
import CompanySpecs from './Pages/CompanySpecsContainer';
import ProductSpecsContainer from './Pages/ProductSpecsContainer';

function App() {
  const isDeskTopDevice = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  return (
    <>
        <AppHeader isDeskTopDevice={isDeskTopDevice} />
      <Container maxWidth>
        <ProductsContainer isDeskTopDevice={isDeskTopDevice} />
        <Bigbanner isDeskTopDevice={isDeskTopDevice}/>
        <ProductSpecsContainer isDeskTopDevice={isDeskTopDevice}/>
        {/* Product embracemnets/ eligance from booklet */}
        {/* <Bigbanner isDeskTopDevice={isDeskTopDevice}/> */}
        <CompanyProfileContainer isDeskTopDevice={isDeskTopDevice} />
        <CompanySpecs isDeskTopDevice={isDeskTopDevice}/>
        <ContactUsContainer isDeskTopDevice={isDeskTopDevice} />
        {/* Final Footer Details */}
      </Container>
      <CompanyFooterContainer isDeskTopDevice={isDeskTopDevice}/>
    </>

  );
}

export default App;
