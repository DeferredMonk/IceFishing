import { Container, Box, Typography, List, Grid } from '@mui/material'
import React from 'react'
import Rule from './Rule'

const Instructions = () => {
    return (
        <Container sx={{
            marginTop: "30px",
            maxWidth: "900px",
            width: "100%"
        }}>
            <Typography
                variant="h2">
                Pilkkijän säännöt!
            </Typography>
            <Container sx={{
                display: "inline-flex",
                flexWrap: "wrap"
            }}>
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
                <Rule />
            </Container>

        </Container>
    )
}

export default Instructions