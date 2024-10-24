/** @format */

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

function User(props) {
  const history = useHistory();

  // Delete the user
  const handleDelete = async (event) => {
    event.preventDefault();
    console.log("User deleted");
  };

  // Edit/update the user
  const handleEdit = async (event) => {
    event.preventDefault();
    console.log("User updated");

    // Redirect to the edit page
    history.push("/edit");
  };

  return (
    <Box display='flex'>
      <Grid container>
        {/* User data */}
        <Grid item xs={8}>
          <Typography>{props.name}</Typography>
          <Typography style={{ color: "#999" }}>
            {props.email} | {props.phone}
          </Typography>
          <Typography style={{ color: "#999" }}>{props.address}</Typography>
        </Grid>
        {/* Buttons */}
        <Grid item xs={2}>
          <Button variant='outlined' color='primary' onClick={handleEdit}>
            EDIT
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={handleDelete}
          >
            DELETE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default User;
