import { Container, Grid, Typography, Box, StyledPaper } from '@mui/material'
import React from 'react'

const Rule = ({ rule, number }) => {



    return (
        <Container sx={{
            flexBasis: "50%",
            marginTop: "30px"
        }}>
            <Typography variant="h5">
                {number}
            </Typography>
            <Typography variant="paragraph">
                {rule}
            </Typography>
        </Container>
    )
}
Rule.defaultProps = {
    number: "Sääntö nro.",
    rule: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dapibus neque, at bibendum odio. Ut diam massa, vehicula vel tortor et, iaculis ornare mi. Fusce vulputate quis risus vitae gravida. Curabitur id ipsum facilisis, accumsan massa in, volutpat felis. Donec egestas ex nulla, imperdiet consequat nulla aliquet a. Quisque vitae tortor vitae ligula condimentum vehicula sed non nisl."
}

export default Rule