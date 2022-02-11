import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formattersDict, converters, checkers, coders } from './constants/Constants';
import { Link } from 'react-router-dom';


import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import AlbumIcon from '@mui/icons-material/Album';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';






import '../index.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.leavingScreen,
        // }),
        backgroundColor: "#343a40",
        borderColor: "#343a40",
    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
        // transition: theme.transitions.create(['margin', 'width'], {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
        zIndex: 1222,
        backgroundColor: "#343a40",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    closeButton: {
        display: 'none',
        marginRight: 16,
        marginLeft: -12,
        color: '#fff',
    },
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    },
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
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
                        <ListItemIcon>
                            <AddCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Formatter" />
                        {Add ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={Add} timeout="auto" unmountOnExit>
                        {Object.entries(formattersDict).map(([path, str]) => (
                            <List key={str} component="div" disablePadding>
                                <ListItem key={str} button inset="true" className={classes.nested} component={Link} to={path}>
                                    <ListItemIcon>
                                        <TurnedInNotIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={str} />
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                    <ListItem button onClick={ConverterOpen}
                    >
                        <ListItemIcon>
                            <AddCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Converters" />
                        {ConverterView ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={ConverterView} timeout="auto" unmountOnExit>
                        {converters.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemIcon>
                                        <TurnedInNotIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </List>
                        ))}
                        <ListItem style={{ paddingLeft: "32px" }} button onClick={coder1Open}>
                            <ListItemIcon>
                                <AddCircleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Coders" />
                            {coderView1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={coderView1} timeout="auto" unmountOnExit>
                            {coders.map((item, index) => (
                                <List style={{ paddingLeft: "40px" }} key={index} component="div" disablePadding>
                                    <ListItem key={index} button inset="true" className={classes.nested}>
                                        <ListItemIcon>
                                            <TurnedInNotIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                </List>
                            ))}
                        </Collapse>
                    </Collapse>


                    <ListItem button onClick={diffOpen}
                    >
                        <ListItemIcon>
                            <AddCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Diff Checkers" />
                        {diffView ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={diffView} timeout="auto" unmountOnExit>
                        {converters.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemIcon>
                                        <TurnedInNotIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                    <ListItem button onClick={coder2Open}>
                        <ListItemIcon>
                            <AddCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Encoders & Decoders" />
                        {coderView2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={coderView2} timeout="auto" unmountOnExit>
                        {coders.map((item, index) => (
                            <List key={index} component="div" disablePadding>
                                <ListItem key={index} button inset="true" className={classes.nested}>
                                    <ListItemIcon>
                                        <TurnedInNotIcon />
                                    </ListItemIcon>
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