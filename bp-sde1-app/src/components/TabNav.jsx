/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, AppBar, Box, Toolbar } from "@mui/material";

const TabNav = () => {
  //Tab selection
  const [tabIndex, setTabIndex] = useState(0);

  //Change tab selection
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <nav>
      <AppBar position='static' color='primary'>
        <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            textColor='inherit'
            indicatorColor='secondary'
          >
            <Tab label='Create User' button component={Link} to='/' />
            <Tab label='List Users' button component={Link} to='/listUsers' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default TabNav;
