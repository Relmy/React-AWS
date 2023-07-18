import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TabNav from "./components/TabNav";
import Form from "./components/Form";
import { Box } from "@mui/material";

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
  });

  return (
    <ThemeProvider theme={theme}>
      <Box display={''} justifyContent={'center'}>
        {/* <TabNav /> */}
        <TabNav />
        <br />
        <Routes>
          {/* Index path */}
          <Route path="/" element={<h1>Create User <Form /> </h1>} />
          <Route path="/list" element={<h1>List Users</h1>} />
          <Route path="/edit" element={<h1>Edit User</h1>} />

        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
