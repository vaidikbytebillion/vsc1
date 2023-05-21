import * as React from 'react';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RoutesData from './routesData';



function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 

  React.useEffect(() => {

  }, [])

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

      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",

    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesData/>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
