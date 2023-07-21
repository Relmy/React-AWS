/** @format */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

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
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();
  //const url = process.env.AWS_API_URL// || "http://localhost:5000/users;
  const { u_id } = useParams();
  const MAPS_API = process.env.REACT_APP_MAPS_API_KEY;

  useEffect(() => {
    // Populate form with user data if u_id is present
    if (u_id) {
      getUser(u_id);
    }
  }, [u_id]);

  const getUser = async (u_id) => {
    // --- Get API call ---
    const data = await fetch(
      "https://lh0w88f5h4.execute-api.ca-central-1.amazonaws.com/dev/id?id=" +
        u_id
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    // Populate form with user data
    setFormData(data);
  };

  // --- Create or update the user ---
  const handleSubmit = async (event) => {
    event.preventDefault();

    // --- Fetch API calls ---
    if (u_id) {
      // PUT request to update an existing user
      await fetch(
        "https://lh0w88f5h4.execute-api.ca-central-1.amazonaws.com/dev/save",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("User updated");
    } else {
      // POST request to create a new user
      await fetch(
        "https://lh0w88f5h4.execute-api.ca-central-1.amazonaws.com/dev/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("User created");
    }

    clearForm();
    console.log(formData);
  };

  // --- Delete user --
  const handleDelete = async (event) => {
    event.preventDefault();

    if (!u_id) {
      console.log("No user to delete");
      return;
    }
    // --- Delete API call ---
    await fetch(
      "https://lh0w88f5h4.execute-api.ca-central-1.amazonaws.com/dev/",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: u_id }),
      }
    )
      .then((response) => response.json())
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
    navigate("/");
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
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position='end'>
              //       <IconButton
              //         type='button'
              //         aria-label='search'
              //         onClick={setShowMap(!showMap)}
              //       >
              //         <SearchIcon />
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
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
      {/* ref: https://developers.google.com/maps/documentation/embed/embedding-map#search_mode */}
      {/* {showMap ? (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <iframe
            title='Google Maps'
            loading='lazy'
            src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API}&q=${formData.address}`}
          ></iframe>
        </Box>
      ) : null} */}
    </Box>
  );
};

export default Form;
