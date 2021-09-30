import * as React from "react"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { NavLink,useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { useAuthStore } from "../../stores";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import TableChartIcon from '@material-ui/icons/TableChart';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import {MenuItem} from "@material-ui/core";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// @ts-ignore
import AmaxLogo from "./amax_logo.png"

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
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
    }),
);

export default function PermanentDrawerLeft() {
    const location = useLocation();

    const activeRoute = (routeName: any) => {

        return location.pathname === routeName ? true : false;
    }

    const auth = useAuthStore()
    const classes = useStyles();
    const [open,setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    //className={classes.nested}
    //onClick={auth.signIn}
    return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div>
                    <div className={classes.toolbar}>
                        <div className={classes.logo}>
                            <NavLink to={"/"}>
                        <img className={classes.logo} src={AmaxLogo} />
                            </NavLink>
                        </div>
                    </div>

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


                        <NavLink to={"/leaderboards"} style={{color: '#92929F', textDecoration: 'none'}} activeStyle={{color: '#E5E5E5', textDecoration: 'none'}}>
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
            </Drawer>
    );
}
