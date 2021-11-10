import * as React from "react"
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        width: `calc(100% - 240px)`,
        marginLeft: 240
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    avatarButton:{
        margin: '0px 19px'
    },
    square: {
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        boxShadow: '0px 0px 16px rgba(220, 4, 255, 0.6), inset 0px 0px 8px rgba(185, 122, 201, 0.6)',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'linear-gradient(360deg, rgba(243, 239, 243, 0.1581) 0%, rgba(222, 90, 225, 0.119) 21.53%, rgba(243, 239, 243, 0.1581) 100%), url(telegram-cloud-photo-size-2-5204293876830024218-y_partial.jpg);',
    },
    inputRoot: {
        color: 'inherit',
    },
    toolbar: {
        minHeight: 80,
        background: '#202A34'

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        },
    badge: {
        background: "orange"
    },
}));


export default function PlayerAvatar({url, badge_count, friends_incoming}: {url: string,badge_count: number,friends_incoming: any}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    {friends_incoming.map((friend_name) =>  <MenuItem onClick={handleClose}>{friend_name}</MenuItem>)}
    return (
        <>
        <IconButton className={classes.avatarButton} onClick={handleMenu}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true">

            <Badge badgeContent={badge_count} color="secondary">
                <Avatar variant="square" className={classes.square} src={url} >
                    N
                </Avatar>
            </Badge>

        </IconButton>
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
    >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />



    </Menu>
        </>
    )
}