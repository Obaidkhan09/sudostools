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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import { formattersList, converters, checkers, coders } from './constants/Constants';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import "../App.css";

const logoFonts = "'Alata', sans-serif";
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AppBarDrawer() {
    const [logoFontSize, setLogoFontSize] = useState(0);
    // const [mobileOpen, setMobileOpen] = useState(false);

    // const handleOpenNavMenu = (event) => {
    //     setMobileOpen(!mobileOpen);

    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //     setMobileOpen(false);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    // let logoFontSize = 0;
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

    const list = () => (
        <Box
            sx={{ width: 250 }}
            style={{ marginTop: "80px" }}
            role="presentation"
        >
            <Typography style={{ padding: "0px 16px", fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.54)", margin: "0px" }}>
                Navigation
            </Typography>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Formatters</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 16px 16px" }}>
                    {formattersList.map((item, i) => (
                        <Typography key={i}
                            style={{
                                padding: "8px 16px",
                                fontSize: "1rem",
                                fontFamily: "Roboto",
                                lineSpacing: "0.00938rem",
                                paddingBottom: "12px"
                            }}>
                            {item}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Converters</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 16px 16px" }}>
                    {converters.map((item, i) => (
                        <Typography key={i} style={{
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            lineSpacing: "0.00938rem",
                            paddingBottom: "12px"
                        }}>
                            {item}
                        </Typography>
                    ))}
                    <Accordion elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            Encode & Decode
                        </AccordionSummary>
                        <AccordionDetails>
                            {coders.map((item, i) => (
                                <Typography key={i} style={{
                                    padding: "8px 16px",
                                    fontSize: "1rem",
                                    fontFamily: "Roboto",
                                    lineSpacing: "0.00938rem",
                                    paddingBottom: "12px"
                                }}>
                                    {item}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Diff Checkers</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 16px 16px" }}>
                    {checkers.map((item, i) => (
                        <Typography key={i} style={{
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            lineSpacing: "0.00938rem",
                            paddingBottom: "12px"
                        }}>
                            {item}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: "rgb(42,42,42)", zIndex: 100000, overflow: "hidden" }} elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters style={{}}>
                        {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
            >
              LOGO
            </Typography> */}

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
                            {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                        </Box>
                        <Link to="/">
                            <img src={logo} alt="Logo" width="58" css={css`padding-right: 8px; padding-left: 0px;`} />
                        </Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'flex' } }}
                            fontFamily={logoFonts}
                            fontSize={logoFontSize}
                        // css={css`font-size : ${logoFontSize}`}
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
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}
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
                    {list()}
                </SwipeableDrawer>
            </div>
        </>
    )
}