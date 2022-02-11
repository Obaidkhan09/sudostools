import React, { useState } from "react";

import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Grid, List, ListItem } from "@mui/material";
import { formattersList, converters, checkers, coders } from '../constants/Constants';
import "../../App.css"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export default function Footer() {
    
    const [drawerWidth, setdrawerWidth] = useState(0);
    
    const screenSize = () => {
        if (window.innerWidth < 600) {
            setdrawerWidth(10);
        }
        else setdrawerWidth(270);
    }
    
    window.addEventListener('load', screenSize);
    window.addEventListener('resize', screenSize);
    
    return (
        <div id="footer"
            style={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                marginTop: "280px",
                backgroundColor: "#2A2A2A",
                padding: "24px",
                paddingLeft: `${drawerWidth}px`,
                color: "white",
                height: "55%",
            }}>
            <Grid container style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <Grid item lg={3} md={4} sm={6} xs={12} style={{ paddingBottom: "0px" }}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem" }}>
                        Converters
                    </Typography>
                    <List>
                        {converters.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px" }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem" }}>
                        Formatters
                    </Typography>
                    <List>
                        {formattersList.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px" }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem" }}>
                        Diff Checkers
                    </Typography>
                    <List>
                        {checkers.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px" }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Typography variant="h4" fontFamily="Alata" style={{ marginBottom: "1.2rem" }}>
                        Encoder & Decoder
                    </Typography>
                    <List>
                        {coders.map((item, index) => (
                            <ListItem key={index} style={{ fontSize: "1rem", padding: "0px", marginBottom: "5px" }}
                                className="onHover"
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize="0.75rem">
                        <CopyrightIcon css={css`padding-top : 12px; margin-top : 15px;`} />
                        Copyright 2020 Doubledrop, LLC{'\u00A0'}|{'\u00A0'}
                        <a css={css`color: #f50057;`}>{'\u00A0'}Privacy Notice{'\u00A0'}</a>{'\u00A0'}|
                        {'\u00A0'}<a css={css`color: #f50057;`}>{'\u00A0'}Cookie Policy{'\u00A0'}</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}