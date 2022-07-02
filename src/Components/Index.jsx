import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Index = () => {
    return (
        <Container sx={{
            marginTop: "30px",
            maxWidth: "900px",
            width: "100%",
        }}>
            <Typography
                variant="h2">
                Tervetuloa pilkkimään!
            </Typography>
            <img src='pilkki.jpg' style={{
                float: "left"
            }} />
            <Typography
                variant="h4"
                align='center'
                sx={{
                    marginTop: "170px"
                }}>

                15.1.2023
                <Typography variant="h5" component="div">
                    Kilpailu pidetään Maallavedessä 15.1.2023 klo 16:00
                </Typography>
            </Typography>
            <Container sx={{ display: "flex" }}>
                <Typography
                    variant="paragraph"
                    component="div"
                    marginTop="50px"
                ><Typography variant="h5">Otsikko</Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus ac fringilla vehicula. Aliquam erat volutpat. Maecenas non congue justo. Phasellus nisl risus, consequat at pharetra ut, porta non augue. Mauris vitae diam molestie, blandit sem a, sollicitudin nisl. Morbi a ultricies magna, sit amet hendrerit metus. Etiam nec tortor ac libero dictum ultricies. Nullam ut aliquam enim, non posuere nisl. Cras vehicula eros eu magna tempus, sit amet tempor neque dignissim. Aliquam erat volutpat. Donec eget sapien sodales, tincidunt purus quis, pharetra ligula. Quisque vel molestie velit. Aliquam sagittis, odio a accumsan bibendum, mi diam elementum felis, ac congue metus lacus sit amet eros. Aliquam fermentum ornare sem non consequat.
                    Aliquam gravida, orci sed aliquam blandit, massa quam imperdiet eros, at bibendum sapien libero sit amet dolor. Ut nec dui blandit, lobortis nunc ut, sollicitudin eros. Pellentesque lobortis est quis luctus iaculis. Integer bibendum tellus et odio consequat, at egestas leo dictum. Suspendisse sagittis arcu orci. Aliquam at placerat diam. Maecenas euismod tellus lacus, in pulvinar purus iaculis hendrerit. Quisque in tellus nec purus porta mollis.
                </Typography>
                <Typography
                    variant="paragraph"
                    component="div"
                    marginTop="50px"

                ><Typography variant="h5">Otsikko</Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus ac fringilla vehicula. Aliquam erat volutpat. Maecenas non congue justo. Phasellus nisl risus, consequat at pharetra ut, porta non augue. Mauris vitae diam molestie, blandit sem a, sollicitudin nisl. Morbi a ultricies magna, sit amet hendrerit metus. Etiam nec tortor ac libero dictum ultricies. Nullam ut aliquam enim, non posuere nisl. Cras vehicula eros eu magna tempus, sit amet tempor neque dignissim. Aliquam erat volutpat. Donec eget sapien sodales, tincidunt purus quis, pharetra ligula. Quisque vel molestie velit. Aliquam sagittis, odio a accumsan bibendum, mi diam elementum felis, ac congue metus lacus sit amet eros. Aliquam fermentum ornare sem non consequat.
                    Aliquam gravida, orci sed aliquam blandit, massa quam imperdiet eros, at bibendum sapien libero sit amet dolor. Ut nec dui blandit, lobortis nunc ut, sollicitudin eros. Pellentesque lobortis est quis luctus iaculis. Integer bibendum tellus et odio consequat, at egestas leo dictum. Suspendisse sagittis arcu orci. Aliquam at placerat diam. Maecenas euismod tellus lacus, in pulvinar purus iaculis hendrerit. Quisque in tellus nec purus porta mollis.
                </Typography>
            </Container>
        </Container>
    )
}

export default Index