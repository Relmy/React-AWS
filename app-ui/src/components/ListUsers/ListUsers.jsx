/** @format */

import React, { useEffect, useState } from "react";
import { Box, Grid, TextField, Button, List, ListItem } from "@mui/material";

import { User } from "./User";

const ListUsers = () => {
  const data = [];

  // on mount, fetch all users
  useEffect(() => {
    // fetch all users
  }, []);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <List sx={{ maxWidth: 700 }}>
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
