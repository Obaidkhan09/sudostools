import React, { useState } from 'react'
//MATERIAL UI IMPORTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import logo from '../assets/images/logo.png'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';


/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import "../App.css";
import DrawerContent from './DrawerContent.component';

const logoFonts = "'Alata', sans-serif";

export default function AppBarDrawer() {
    const [logoFontSize, setLogoFontSize] = useState(0);
    const windowResize = () => {
        if (window.innerWidth > 600) {
            setLogoFontSize("1.25rem");
        }
        else {
            setLogoFontSize("1.125rem");
        }
    }
    window.addEventListener('resize', windowResize);
    window.addEventListener('load', windowResize);

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: "rgb(42,42,42)", zIndex: 100000, overflow: "hidden" }} elevation={0}>
                <Container maxWidth="xxl">
                    <Toolbar disableGutters style={{}}>


                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton
                                css={css`
                    padding: 6px;
                    padding-left: 0px;
                    padding-right: 28px;
                `}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer(!state)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Link to="/" component="">
                            <img src={logo} alt="Logo" width="58" css={css`padding-right: 8px; padding-left: 0px;`} />
                        </Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'flex' } }}
                            fontFamily={logoFonts}
                            fontSize={logoFontSize}
                        >
                            Sudo's Tools
                        </Typography>
                        <Typography
                            variant='h4'
                            noWrap
                            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
                            fontFamily="Roboto"
                            fontSize="1rem"
                            style={{ paddingLeft: "72px" }}
                        >
                            Free online tools for developers
                        </Typography>
                        
                    </Toolbar>
                </Container>

            </AppBar>
            <div>
                <SwipeableDrawer
                    anchor="left"
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <DrawerContent />
                </SwipeableDrawer>
            </div>
        </>
    )
}