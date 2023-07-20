import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Grid, TextField, Button } from '@mui/material';
/**
 * Form for creating and editing a user.
 * 
 * @returns {JSX.Element}
 */
const Form = () => {
  // Form defaults
  const formDefaults = {
    name: "",
    email: "",
    phoneNum: "",
    address: "",
  };
  const [formData, setFormData] = useState(formDefaults);
  //const url = process.env.AWS_API_URL// || "http://localhost:5000/users;
  const url = "http://localhost:5000/posts";

  // --- Create or update the user ---
  const handleSubmit = async (event) => {
    event.preventDefault();

    // --- Fetch API calls ---

    // POST request to create a new user
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // PUT request to update an existing user

    clearForm();
    //------------------------------
    console.log("Form submitted");
    console.log(formData);
  };

  // --- Delete user --
  const handleDelete = async (event) => {
    event.preventDefault();

    // --- Delete API call ---
    //await fetch(`${url}/${location.state.id}`, { method: "DELETE" })
    await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    clearForm();
    //------------------------------
    console.log("User deleted");
    console.log(formData);
  };

  // --- Clear form --- 
  const clearForm = () => {
    setFormData(formDefaults);
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} width={600}>
          {/* Inputs */}
          <Grid item xs={12}>
            <TextField
              id='name'
              label='Name'
              variant='filled'
              fullWidth
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              variant='filled'
              fullWidth
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              id='phoneNum'
              label='Phone Number'
              variant='filled'
              fullWidth
              value={formData.phoneNum}
              onChange={(event) =>
                setFormData({ ...formData, phoneNum: event.target.value })
              }
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            {/* Add context for click to show/hide map */}
            <TextField
              id='address'
              label='Address'
              variant='filled'
              fullWidth
              value={formData.address}
              onChange={(event) =>
                setFormData({ ...formData, address: event.target.value })
              }
            />
          </Grid>
          <br />
          {/* Buttons */}
          <Grid item xs={6}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                Save
              </Button>
              {/* ref to: https://mui.com/material-ui/guides/composition/#prop-forwarding-amp-caveat */}
              {/* <ListItem button component={Link} to="/"> */}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Button variant='outlined' color='primary' onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      {/* Google Maps */}
      <Box display='flex' justifyContent='center' alignItems='center'>
        {/* ref: https://developers.google.com/maps/documentation/embed/embedding-map#search_mode */}
      </Box>
    </Box>
  );
}

export default Form