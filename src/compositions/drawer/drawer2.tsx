import * as React from "react"

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AmaxAppBar from "../appbar";
import { NavLink,useLocation } from 'react-router-dom';
import {MenuItem} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HistoryIcon from "@material-ui/icons/History";
import {useEffect} from "react";
// @ts-ignore
import AmaxLogo from "./amax_logo.png"
import TableChartIcon from "@material-ui/icons/TableChart";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import HelpIcon from "@material-ui/icons/Help";
import AnnouncementIcon from "@material-ui/icons/Announcement";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    logo: {
        display: "flex",
        justifyItems: "center",
        allignItems: "center",
        marginTop: 5,
        marginLeft: 6,
        marginRight: 6,
        width: `calc(${drawerWidth}px - 20px)`
    },
    logoImage: {
        justifySelf: "center",
        alignItems: "center",
        alignSelf: "center",

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    selected: {
        backgroundColor: "#3E5270",
        borderRadius: 4
    },
    menuitem:{
        borderRadius: 4,
        marginTop: "0.5em",
        marginBottom: "0.5em",
        "&$selected": {       // this is to refer to the prop provided by M-UI
            backgroundColor: "#3E5270", // updated backgroundColor
        },
    },
    menulist: {
        padding: 24
    }
}));



export default function ResponsiveDrawer() {
    const [isDesktop, setDesktop] = React.useState(window.innerWidth < 600);

    const [open,setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const updateMedia = () => {
        setDesktop(window.innerWidth < 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = window.screen.width < 600

    const activeRoute = (routeName: any) => {

        return location.pathname === routeName;
    }

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <List className={classes.menulist}>
                <NavLink to={"/Dashboard"} style={{color: '#92929F', textDecoration: 'none'}} activeStyle={{color: '#E5E5E5', textDecoration: 'none'}}>
                    <MenuItem button key='Dashboard' selected={activeRoute("/Dashboard")} classes = {{root: classes.menuitem, selected: classes.selected}}>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </MenuItem>
                </NavLink>

                <NavLink to={"/Dashboard"} style={{color: '#92929F', textDecoration: 'none'}} activeStyle={{color: '#E5E5E5', textDecoration: 'none'}}>
                    <MenuItem button key='Games feed' classes = {{root: classes.menuitem, selected: classes.selected}}>
                        <ListItemIcon><HistoryIcon/></ListItemIcon>
                        <ListItemText primary="Games feed" />
                    </MenuItem>
                </NavLink>

            <NavLink to={"/leaderboards"} style={{color: '#92929F', textDecoration: 'none'}}>
                <MenuItem button onClick={handleClick} classes = {{root: classes.menuitem, selected: classes.selected}}>
                    <ListItemIcon><TableChartIcon/></ListItemIcon>
                    <ListItemText primary="Leaderboards" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
            </NavLink>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button >

                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>



        </List>
    <Divider variant="middle"/>
    <List>

        <ListItem button key='how-to-play'>
            <ListItemIcon><HelpIcon/></ListItemIcon>
            <ListItemText primary="How to play" />
        </ListItem>


        <ListItem button key='news'>
            <ListItemIcon><AnnouncementIcon/></ListItemIcon>
            <ListItemText primary="News" />
        </ListItem>

        <ListItem button key='discord'>
            <ListItemIcon><TableChartIcon/></ListItemIcon>
            <ListItemText primary="Discord server" />
        </ListItem>


    </List>

        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />

            {isDesktop ? (
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>

            ) : (
                <AmaxAppBar/>
            )}


            <nav className={classes.drawer}>

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon/>
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}>
                        <div className={classes.logo}>
                            <NavLink to={"/"}>
                                <img className={classes.logo} src={AmaxLogo} />
                            </NavLink>
                        </div>
                    </div>
                    {drawer}
                </Drawer>
            </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />

            </div>
        </div>
    );
}
