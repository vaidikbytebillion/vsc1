import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{formattedTime}</Typography>
        <Typography variant="h6">{formattedDate}</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default DateTimeDisplay;
