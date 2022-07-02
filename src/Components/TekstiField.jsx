import React from 'react'
import { Container, TextField } from '@mui/material';

const TekstiField = ({ handle, label, require, name, error, helper }) => {
    return (
        <TextField
            fullWidth
            label={label}
            component='div'
            margin='normal'
            onChange={handle}
            name={name}
            error={error}
            helperText={helper}
        />
    )
}

export default TekstiField