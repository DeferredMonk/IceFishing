import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, CssBaseline } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Link } from 'react-router-dom'

const Nav = ({ kilpailu }) => {

    const [valikko, setValikko] = useState(false);

    return (
        <CssBaseline>
            <AppBar color='default' position='static'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setValikko(true)} >
                        <MenuOpenIcon />
                    </IconButton>
                    <Drawer
                        open={valikko}
                        onClose={() => setValikko(false)}>
                        <List sx={{
                            width: "220px"
                        }}
                            onClick={() => setValikko(false)}>
                            <ListItem>
                                <ListItemText primary={kilpailu} sx={{
                                    textAlign: "center"
                                }} />
                            </ListItem>
                            <ListItem button component={Link} to="/">
                                <ListItemIcon>
                                    <HomeOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Aloitus" />
                            </ListItem>
                            <ListItem button component={Link} to="/ilmoittaudu">
                                <ListItemIcon>
                                    <AssignmentOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Ilmoittaudu" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/saannot">
                                <ListItemIcon>
                                    <InfoOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Kilpailusta" />
                            </ListItem>
                        </List>
                    </Drawer>
                    <Typography variant="h5" component="div">
                        {kilpailu}
                    </Typography>
                </Toolbar>
            </AppBar >
        </CssBaseline>
    )
}

export default Nav