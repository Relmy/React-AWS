/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

const User = (props) => {
  //const history = useHistory();
  const url = "http://localhost:5000/posts";

  // Delete the user
  const handleDelete = async (event) => {
    event.preventDefault();

    // --- Delete API call ---
    //await fetch(`${url}/${location.state.id}`, { method: "DELETE" })
    await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.id),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //------------------------------
    console.log("User deleted");
    console.log("Item props:", props);
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

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
};

export default User;
