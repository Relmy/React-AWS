/** @format */

import React, { useEffect, useState } from "react";
import { Box, Grid, TextField, Button, List, ListItem } from "@mui/material";

import User from "./User";

const ListUsers = () => {
  const data = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@email.com",
      phone: "1231231234",
      address: "1234 Main St, City, State 12345",
    },
    {
      _id: "2",
      name: "John Doe",
      email: "john@email.com",
      phone: "1231231234",
      address: "1234 Main St, City, State 12345",
    },
  ];

  // on mount, fetch all users
  useEffect(() => {
    // fetch all users
  }, []);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <List>
        {/* Users */}
        {data.map((value) => (
          <ListItem divider key={value._id}>
            <User {...value} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListUsers;
