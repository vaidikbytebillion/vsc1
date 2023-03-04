import * as React from 'react';
import './App.css';
import RoutesData from './routesData';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from './images/backGround.jpg';


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [screeWidth,setScreenWidth]=React.useState('');
  const [screeHeight,setScreenHeight]=React.useState('')

  React.useEffect(()=>{
    
  },[])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'dark',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div style={{
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesData />
      </ThemeProvider>
    </div>
  );
}

export default App;
