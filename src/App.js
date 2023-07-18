import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Form from "./components/Form";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6200EE',
      },
      secondary: {
        main: '#6200EE',
      },
      text: {
        secondary: 'rgba(0, 0, 0, 0.6)',
        primary: 'rgba(0, 0, 0, 0.87)',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>bp-sde1</h1>
      <Form />
    </ThemeProvider>
  );
}

export default App;
