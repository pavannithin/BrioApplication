import logo from './logo.svg';
import './App.css';
import AppHeader from './Pages/appHeader';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AboutContainer from './Pages/AboutContainer';
import ProductsContainer from './Pages/ProductsContainer';
import { useMediaQuery } from 'react-responsive';
import ContactUsContainer from './Pages/ContactUsContainer'

function App() {
  const isDeskTopDevice = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  return (
    <Container maxWidth>
      {/* <Container maxWidth> */}
        <AppHeader isDeskTopDevice={isDeskTopDevice}/>
        <AboutContainer isDeskTopDevice={isDeskTopDevice}/>
        <ProductsContainer isDeskTopDevice={isDeskTopDevice}/>
        <ContactUsContainer isDeskTopDevice={isDeskTopDevice}/>
      {/* </Container> */}
    </Container>
  );
}

export default App;
