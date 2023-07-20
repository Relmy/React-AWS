import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Form for creating and editing a user.
 *
 * @returns {JSX.Element}
 */
const Form = () => {
  // formData is an object that contains the values of the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    address: "",
  });
  //const location = useLocation();
  //const [location, setLocation] = useState({ state: { id: "" } });
  //const API_URL = process.env.API_URL;

  // Create or update the user
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(formData);

    // await fetch(`${API_URL}/save`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .catch((error) => console.log("Error:", error));

    //learForm();
  };

  // Delete the user
  const handleDelete = async (event) => {
    event.preventDefault();

    // //Delete API call
    // await fetch(`${API_URL}/${location.state.id}`, { method: "DELETE" })
    //   .then((response) => response.json())
    //   .catch((error) => console.log("Error:", error));

    // // TODO:  Ensure that state is cleared
    // location.state.id = "";
    console.log("User deleted");
    //clearForm();
  };

  // Clear the form
  // const clearForm = () => {
  //   setFormData(formDefaults);
  // };

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
              {/* <Button variant='outlined' color='primary' component={Link} to='/form/userDelete'> */}
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
};

export default Form