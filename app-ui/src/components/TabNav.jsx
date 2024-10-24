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
    //Link tab need to use
  };

  function LinkTab(props) {
    return (
      <Tab
        component='a'
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

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
            <LinkTab label='Create User' href='/' />
            <LinkTab label='List Users' href='/listUsers' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default TabNav;
