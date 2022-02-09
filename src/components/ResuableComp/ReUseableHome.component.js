import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
export default function SQLFormatter(props) {
    const drawerWidth = "240px";
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            style={{ padding: "24px 0px 0px" }}
        >
            <div style={{ padding: "0px 24px" }}>
                <Typography
                    variant="h3"
                    fontFamily="Alata"
                    marginBottom="2rem"
                    marginTop="1.2rem"
                    style={{ fontSize: "2.784rem", padding: "0px", margin: "0px" }}
                >
                    {props.heading}
                </Typography>
                <Typography
                    style={{
                        fontSize: "1rem",
                        marginBottom: "1.2rem",
                    }}
                >
                    We created this website to help developers like ourselves. Many of the tools found here are
                    tools we use often during our day-to-day development, and some were even used during the creation
                    of this website!
                </Typography>
                <Typography style={{
                    fontSize: "1rem",
                    marginBottom: "1.2rem",
                }}>
                    The website includes formatters, compilers, encoders, minifiers, and diff checkers. We really hope
                    you enjoy using Sudo's Tools.
                </Typography>
                <Divider style={{ marginBottom: "27px" }} />
                <Typography variant="h4" fontFamily="Alata" style={{ fontSize: "1.9rem", marginBottom: "0.5rem" }}>
                    We'd love to know about your experience using Sudo's Tools
                </Typography>
                <Typography style={{
                    fontSize: "1rem",
                    marginBottom: "1.2rem",
                }}>
                    Sudo's Tools is under active development. Your feedback will help us improve the tools and
                    experience on our app. We really appreciate you taking the time to let us know about any bugs
                    you've encountered, features you'd like to see, or any other feedback you'd like to pass along.
                </Typography>
                <Button variant="contained" style={{ backgroundColor: "#3F51B5" }}>
                    SEND FEEDBACK
                </Button>
            </div>
        </Box>
    )
}