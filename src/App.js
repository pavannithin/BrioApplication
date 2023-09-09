import logo from './logo.svg';
import './App.css';
import AppHeader from './Pages/appHeader';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CompanyProfileContainer from './Pages/CompanyProfileContainer';
import ProductsContainer from './Pages/ProductsContainer';
import { useMediaQuery } from 'react-responsive';
import ContactUsContainer from './Pages/ContactUsContainer'

function App() {
  const isDeskTopDevice = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  return (
    <>
      <AppHeader isDeskTopDevice={isDeskTopDevice} />
      <Container maxWidth>
        <ProductsContainer isDeskTopDevice={isDeskTopDevice} />
        <CompanyProfileContainer isDeskTopDevice={isDeskTopDevice} />
        <ContactUsContainer isDeskTopDevice={isDeskTopDevice} />
      </Container>
    </>

  );
}

export default App;
