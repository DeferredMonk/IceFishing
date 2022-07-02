import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const applied = ({ applierInfo }) => {
    return (
        <Container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15%"
        }}>
            <Container
                sx={{
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    padding: "5%"
                }}><Typography
                    variant="h5" align='center'>
                    Ilmoittautumisesi on vastaanotettu! Kiitos.
                </Typography>
                <Container sx={{
                    padding: "5%",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Etunimi:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.firstname}</Typography>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Sukunimi:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.lastname}</Typography>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Sähköpostiosoite:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.email}</Typography>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Puhelinnumero:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.phone}</Typography>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Asuinpaikkakunta:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.city}</Typography>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography marginLeft="5%">Ikä luokka:</Typography>
                        <Typography marginRight="5%">{applierInfo.current.class}</Typography>
                    </Container>


                </Container>
            </Container>
        </Container >
    )
}
export default applied