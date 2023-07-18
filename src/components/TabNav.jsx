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

  // TabLink ref: https://codesandbox.io/s/xwl794?file=/demo.js

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
            <Tab label='Create User' />
            <Tab label='List Users' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default TabNav;
