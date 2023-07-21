import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TabNav from "./components/TabNav";
import Form from "./components/Form";
import { Box } from "@mui/material";
import ListUsers from "./components/ListUsers/ListUsers";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6200EE',
      },
      secondary: {
        main: '#FFFFFF',
      },
      text: {
        secondary: 'rgba(0, 0, 0, 0.6)',
        primary: 'rgba(0, 0, 0, 0.87)',
      },
    },
    typography: {
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
        color: '#00000099',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent={'center'}>
        {/* <TabNav /> */}
        <TabNav />
        <br />
        <Routes>
          {/* Index path */}
          <Route path="/listUsers" element={<ListUsers />} />
          <Route path="/">
            <Route index element={<Form />} />
            <Route path="id/:u_id" element={<Form />} />
            <Route path="*" element={<Form />} />
          </Route> 
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
