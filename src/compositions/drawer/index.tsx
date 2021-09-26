import * as React from "react"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
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
    }),
);

export default function PermanentDrawerLeft() {
    const auth = useAuthStore()
    const classes = useStyles();
    const [open,setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    //className={classes.nested}
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
                    <div className={classes.toolbar} />

                    <List>
                        <ListItem button key='Dashboard' onClick={auth.signIn} href="/Dashboard">
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
