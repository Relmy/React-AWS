/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

const User = (props) => {
  //const history = useHistory();

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
    //history.push("/edit");
  };

  return (
    <Box display='flex'>
      <Grid container width={600}>
        {/* User data */}
        <Grid item xs={8}>
          <Typography variant='body1'>{props.name}</Typography>
          <Typography variant='body2'>
            {props.email} | {props.phone}
          </Typography>
          <Typography variant='body2'>{props.address}</Typography>
        </Grid>
        {/* Buttons */}
        <Grid item xs={2}>
          <Button variant='outlined' color='primary' onClick={handleEdit}>
            Edit
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant='outlined' color='primary' onClick={handleDelete}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

User.propTypes = {};

export default User;
