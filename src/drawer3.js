import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import TableChartIcon from '@material-ui/icons/TableChart';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: {
      height: 110,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open,setOpen] = React.useState(true);



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />

            <List>
                <ListItem button key='Dashboard'>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>


                <ListItem button key='Games feed'>
                    <ListItemIcon><HistoryIcon/></ListItemIcon>
                    <ListItemText primary="Games feed" />
                </ListItem>

                <ListItem button key='Leaderboards'>
                    <ListItemIcon><TableChartIcon/></ListItemIcon>
                    <ListItemText primary="Leaderboards" />
                </ListItem>


                <ListItem button onClick={handleClick}>
                    <ListItemIcon><TableChartIcon/></ListItemIcon>
                    <ListItemText primary="Leaderboards" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
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

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
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
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default ResponsiveDrawer;
