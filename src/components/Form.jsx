import React, { useState } from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
/**
 * Form for creating and editing a user.
 * 
 * @returns {JSX.Element}
 */
const Form = () => {
    // formData is an object that contains the values of the form fields
    const [formData, setFormData] = useState({
        name: '', email: '', phoneNum: '', address: ''
    });

    // Create or update the user
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Form submitted')
        console.log(...formData)
    }

    // Delete the user
    const handleDelete = async (event) => {
        event.preventDefault()
        console.log('User deleted')
    }

    return (
        <Box justify="center" sx={{width: '592px'}}>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="name" label="Name" variant="filled" fullWidth value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                        <TextField id="email" label="Email" variant="filled" fullWidth value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                        <TextField id="phoneNum" label="Phone Number" variant="filled" fullWidth value={formData.phoneNum} onChange={(event) => setFormData({ ...formData, phoneNum: event.target.value })} />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                        <TextField id="address" label="Address" variant="filled" fullWidth value={formData.address} onChange={(event) => setFormData({ ...formData, address: event.target.value })} />
                    </Grid>
                    <br />
                    {/* Buttons */}
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Button variant="outlined" color="primary" onClick={handleDelete}>Delete</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default Form