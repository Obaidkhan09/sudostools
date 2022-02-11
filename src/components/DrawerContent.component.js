import React, { useState } from 'react';
import { formattersDict, converters, checkers, coders } from './constants/Constants';
import { Link } from 'react-router-dom';


import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';






import '../index.css'


const useStyles = makeStyles((theme) => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: "#343a40",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    avatarImg: {
        flexGrow: 1,
    },
    mainToolbar: {
        minHeight: 84,
    },
    headerMargin: {
        minHeight: 55,
    },
    dNone: {
        display: "none",
    },
    removeLg: {
        maxWidth: "100%",
    },
}));


const drawerWidth = 240;

export default function DrawerContent() {
    const classes = useStyles();
    const theme = useTheme();


    const [Add, setAdd] = useState(false);
    const [ConverterView, setConverterView] = useState(false);
    const [open, setOpen] = useState(true);
    const [coderView1, setCoderView1] = useState(false);
    const [coderView2, setCoderView2] = useState(false);
    const [diffView, setDiffView] = useState(false);

    const FormatterOpen = () => {
        setAdd(!Add);
    };

    const ConverterOpen = () => {
        setConverterView(!ConverterView);
    };

    const coder1Open = () => {
        setCoderView1(!coderView1);
    };
    const coder2Open = () => {
        setCoderView2(!coderView2);
    };
    const diffOpen = () => {
        setDiffView(!diffView);
    };



    return (
        <div style={{ paddingTop: "80px" }}>


            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={(classes.drawerHeader, classes.headerMargin)}>
                </div>
                <List>
                    <ListItem button component={Link} to="/" style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.54)" }}>
                        {/* <ListItemIcon >
                            <HomeIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Navigator" />
                    </ListItem>
                    <ListItem button onClick={FormatterOpen}>
                        <ListItemText primary="Formatters" style={{ color : "3E3E3E" }} />
                        {Add ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={Add} timeout="auto" unmountOnExit>
                        {Object.entries(formattersDict).map(([path, str]) => (
                            <List key={str} component="div" disablePadding>
                                <ListItem key={str} button inset="true" className={classes.nested} component={Link} to={path}>
                                    <ListItemText primary={str} />
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                    <ListItem button onClick={ConverterOpen}
                    >
                        <ListItemText primary="Converters" />
                        {ConverterView ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={ConverterView} timeout="auto" unmountOnExit>
                        {converters.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </List>
                        ))}
                        <ListItem style={{ paddingLeft: "32px" }} button onClick={coder1Open}>
                            <ListItemText primary="Coders" />
                            {coderView1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={coderView1} timeout="auto" unmountOnExit>
                            {coders.map((item, index) => (
                                <List style={{ paddingLeft: "40px" }} key={index} component="div" disablePadding>
                                    <ListItem key={index} button inset="true" className={classes.nested}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                </List>
                            ))}
                        </Collapse>
                    </Collapse>


                    <ListItem button onClick={diffOpen}
                    >
                        <ListItemText primary="Diff Checkers" />
                        {diffView ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={diffView} timeout="auto" unmountOnExit>
                        {checkers.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                    <ListItem button onClick={coder2Open}>
                        <ListItemText primary="Encoders & Decoders" />
                        {coderView2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={coderView2} timeout="auto" unmountOnExit>
                        {coders.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                </List>
            </Drawer>
        </div>
    );
}