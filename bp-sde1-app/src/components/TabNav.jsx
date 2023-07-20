/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, AppBar, Toolbar } from "@mui/material";

const TabNav = () => {
  //Tab selection
  const [tabIndex, setTabIndex] = useState(0);

  //Change tab selection
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // If path is "/listUsers", set tabIndex to 1
  useEffect(() => {
    if (window.location.pathname === "/listUsers") {
      setTabIndex(1);
    }
  }, [tabIndex]);
  // if (window.location.pathname === "/listUsers") {

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
            <Tab label='Create User' component={Link} to='/' />
            <Tab label='List Users' component={Link} to='/listUsers' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default TabNav;
