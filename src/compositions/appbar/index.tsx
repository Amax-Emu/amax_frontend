import * as React from "react"
import { useAuthStore } from "../../stores"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserStats from "../../components/appbar/player_stats";
import PlayerAvatar from "../../components/appbar/player_avatar/player_avatar";
import TransitionsModal from "../../components/register_modal/index";
import SvgIcon from "@material-ui/core/SvgIcon";
import LanguageSelector from "../../components/appbar/language_switcher";
import { useTranslation } from 'react-i18next'
import {UserData, useUserDataStore} from "../../stores/userdataStore";
import CircularProgress from "@material-ui/core/CircularProgress";
const { AMAX_API_URL } = process.env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
        marginLeft: 0,
        width: `calc(100% - 0px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - 240px)`,
            marginLeft: 240,
            flexShrink: 0,
        },

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
      DiscordButton: {
          backgroundColor: '#7289DA',
      },
      DiscordIcon: {
        width: "24px",
          height: "24px",
          viewBox: "0 0 12 12"
      },
      spinner: {
          display: 'flex',
          marginLeft: "calc(50% - 25px)",
          marginTop: "20px",
          '& > * + *': {
              marginLeft: theme.spacing(2),
          }
      }
  }),
);



export function DiscordIcon() {
    const classes = useStyles();

    return (
        <SvgIcon className={classes.DiscordIcon}>
            <path d="M9.828 10.068C9.144 10.068 8.604 10.668 8.604 11.4C8.604 12.132 9.156 12.732 9.828 12.732C10.512 12.732 11.052 12.132 11.052 11.4C11.064 10.668 10.512 10.068 9.828 10.068ZM14.208 10.068C13.524 10.068 12.984 10.668 12.984 11.4C12.984 12.132 13.536 12.732 14.208 12.732C14.892 12.732 15.432 12.132 15.432 11.4C15.432 10.668 14.892 10.068 14.208 10.068Z"/>
            <path d="M20.04 0H3.96C2.604 0 1.5 1.104 1.5 2.472V18.696C1.5 20.064 2.604 21.168 3.96 21.168H17.568L16.932 18.948L18.468 20.376L19.92 21.72L22.5 24V2.472C22.5 1.104 21.396 0 20.04 0ZM15.408 15.672C15.408 15.672 14.976 15.156 14.616 14.7C16.188 14.256 16.788 13.272 16.788 13.272C16.296 13.596 15.828 13.824 15.408 13.98C14.808 14.232 14.232 14.4 13.668 14.496C12.6403 14.6852 11.5862 14.6812 10.56 14.484C9.95751 14.3661 9.36705 14.1934 8.796 13.968C8.49499 13.8522 8.2023 13.7159 7.92 13.56C7.884 13.536 7.848 13.524 7.812 13.5C7.788 13.488 7.776 13.476 7.764 13.464C7.548 13.344 7.428 13.26 7.428 13.26C7.428 13.26 8.004 14.22 9.528 14.676C9.168 15.132 8.724 15.672 8.724 15.672C6.072 15.588 5.064 13.848 5.064 13.848C5.064 9.984 6.792 6.852 6.792 6.852C8.52 5.556 10.164 5.592 10.164 5.592L10.284 5.736C8.124 6.36 7.128 7.308 7.128 7.308C7.128 7.308 7.392 7.164 7.836 6.96C9.12 6.396 10.14 6.24 10.56 6.204C10.632 6.192 10.692 6.18 10.764 6.18C12.8449 5.89835 14.9612 6.29384 16.8 7.308C16.8 7.308 15.852 6.408 13.812 5.784L13.98 5.592C13.98 5.592 15.624 5.556 17.352 6.852C17.352 6.852 19.08 9.984 19.08 13.848C19.08 13.848 18.06 15.588 15.408 15.672V15.672Z"/>
        </SvgIcon>
    );
}

export default function AmaxAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { t, i18n } = useTranslation()
    const auth = useAuthStore()
    const user = useUserDataStore()
    const classes = useStyles();

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }


    // Lucas:
    // Functions passed to useEffect cannot be async.

  return (
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>

                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon/>
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>

                  </Typography>
                  <LanguageSelector/>
                  {/* Added a questionmark in front of the . for type safety xoxo */}
                  {user.userData?.amax_account !== undefined
                  ? <UserStats user_level={user.userData.amax_player_data.leveling.level+1} user_legend={user.userData.amax_player_data.leveling.legend} user_exp={user.userData.amax_player_data.leveling.fans} user_exp_percent={user.userData.amax_player_data.leveling.fans_levelup_percent} user_name={user.userData.amax_player_data.stats.playerName} />
                  : <></>
                  }

                  {/* Added a questionmark in front of the . for type safety xoxo */}
                  {user.userData?.amax_account !== undefined
                      ? <PlayerAvatar url={user.userData.avatarUrl} badge_count={user.userData.amax_player_data.friends_purposes.incoming.length} friends_incoming={user.userData.amax_player_data.friends_purposes.incoming}/>
                      : <Button href={AMAX_API_URL + "/auth/login"} className={classes.DiscordButton} disableElevation endIcon={<DiscordIcon/>} >{t("appbar.login_discord")}</Button>

                  }

              </Toolbar>
          </AppBar>
      </div>

  )

}