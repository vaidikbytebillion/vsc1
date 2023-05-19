import * as React from 'react';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/navBar';
import { Home } from './pages/Home';


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [screeWidth, setScreenWidth] = React.useState('');
  const [screeHeight, setScreenHeight] = React.useState('')

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
        <NavBar />
        <Home/>
        
        
      </ThemeProvider>
    </div>
  );
}

export default App;
