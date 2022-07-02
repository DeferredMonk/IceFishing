import TekstiField from './TekstiField'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Typography, Container, Radio, FormControlLabel, RadioGroup, FormLabel, FormControl, FormHelperText, } from '@mui/material'
import { Box } from '@mui/system'
import { useHistory } from 'react-router-dom'

const Apply = ({ applierInfo }) => {

    const [errorNotification, setErrorNotification] = useState({})
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        let error = {}

        if (!applierInfo.current.firstname) {
            error = { ...error, firstname: "Syötä etunimi" }
        }
        if (applierInfo.current.firstname) {
            if (applierInfo.current.firstname.length < 2) {
                error = { ...error, firstname: "Etunimessä on oltava vähintään 2 kirjainta" }
            }
        } if (!applierInfo.current.lastname) {
            error = { ...error, lastname: "Syötä sukunimi" }
        }
        if (applierInfo.current.lastname) {
            if (applierInfo.current.lastname.length < 2) {
                error = { ...error, lastname: "Sukunimessä on oltava vähintään 2 kirjainta" }
            }
        }
        if (!applierInfo.current.phone && !applierInfo.current.email) {
            error = { ...error, phone: "Syötä numero tai sähköpostiosoitetta", email: "Syötä numero tai sähköpostiosoitetta" }
        } if (!applierInfo.current.class) {
            error = { ...error, class: "Valitse ikä-luokka" }
        }
        if (Object.entries(error).length > 0) {
            setErrorNotification({ ...error })
        } else {
            setErrorNotification({})
            history.push('/kiitos')
        }
        console.log(error, applierInfo)


    }

    const inputHandler = (e) => {

        applierInfo.current[e.target.name] = e.target.value
        console.log(applierInfo.current.firstname)

    }
    return (
        <Container sx={{
            marginTop: "30px",
            maxWidth: "900px",
            border: "5px whitesmoke solid",
            borderRadius: "15px"
        }}>
            <Typography
                variant="h2">
                Ilmoittaudu
            </Typography>
            <form onSubmit={handleSubmit}
                style={{
                    borderRadius: "15px",
                    padding: "5%"
                }}><Box style={{
                    display: "inline-flex",
                }}>
                    <Container sx={{
                        flex: "50%"
                    }}>
                        <TekstiField error={Boolean(errorNotification.firstname)} helper={errorNotification.firstname} name="firstname" label="Etunimi*" require="required" handle={inputHandler} />
                        <TekstiField error={Boolean(errorNotification.lastname)} helper={errorNotification.lastname} name="lastname" label="Sukunimi*" require="required" handle={inputHandler} />
                        <TekstiField name="city" label="Asuinpaikkakunta" handle={inputHandler} />
                        <TekstiField error={Boolean(errorNotification.phone)} helper={errorNotification.phone} name="phone" label="Puhelinnumero" handle={inputHandler} />
                        <TekstiField error={Boolean(errorNotification.email)} helper={errorNotification.email} name="email" label="Sähköpostiosoite" handle={inputHandler} />
                    </Container>
                    <FormControl margin="normal" sx={{
                        flex: "50%",
                        margin: "auto",
                        marginLeft: "30%"
                    }}
                        error={Boolean(errorNotification.class)}>
                        <FormLabel id="Ika-luokka">Ikä luokka*</FormLabel>
                        <RadioGroup
                            aria-labelledby="ika-luokka"
                            onChange={inputHandler}
                            name="class"

                        >
                            <FormControlLabel value="alle 15 vuotiaat" control={<Radio />} label="alle 15 vuotiaat" />
                            <FormControlLabel value="15 – 19 vuotiaat" control={<Radio />} label="15 – 19 vuotiaat" />
                            <FormControlLabel value="20 – 39 vuotiaat" control={<Radio />} label="20 – 39 vuotiaat" />
                            <FormControlLabel value="40 – 59 vuotiaat" control={<Radio />} label="40 – 59 vuotiaat" />
                            <FormControlLabel value="60 – 69 vuotiaat" control={<Radio />} label="60 – 69 vuotiaat" />
                            <FormControlLabel value="70 – 79 vuotiaat" control={<Radio />} label="70 – 79 vuotiaat" />
                            <FormControlLabel value="yli 80 vuotiaat" control={<Radio />} label="yli 80 vuotiaat" />
                        </RadioGroup>
                        <FormHelperText error={Boolean(errorNotification.class)}>{errorNotification.class}</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>

                    <Button
                        variant='outlined'
                        type='submit'>
                        Ilmoittaudu
                    </Button>
                </Box>

            </form >
        </Container >
    )
}

export default Apply