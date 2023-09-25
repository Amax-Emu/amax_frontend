import * as React from "react"
import "./sessions_item.css";
import {useAuthStore} from "../../stores";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import SessionItem from "../../components/session_item";
import { useTranslation } from 'react-i18next'
import { SilentRunner } from "../../components/general_icons/general_icons";
import { Paper, Typography } from "@material-ui/core";
const { AMAX_API_URL } = process.env;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            alignItems: "flex-end",
           // minWidth: 400,
            width: "100%"
            // height: 636,
            /* Blue/700 (2 L) */
            // background: "#304254",

            /* Blue/600 */
            // border: "1px solid #3E5270",
            // boxSizing: "border-box",
            // borderRadius: 8,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        spinner: {
            display: 'flex',
            marginLeft: "calc(50% - 25px)",
            marginTop: "50%",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        }
    }),
);

export interface SessionsData {
    data: Session[];
}

export interface Session {
    sessionId:      string;
    ownerId:        number;
    ownerHash:      string;
    totalSlots:     number;
    gameType:       string;
    availableSlots: number;
    isPublic:       number;
    isInProgress:   number;
    players_list:   PlayersList[];
}

export interface PlayersList {
    playerId:     number;
    bdPlayerName: string;
    statLevel:    number;
    statLegend:   number;
}



export default function SessionsWidget() {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    let [session_data, setData] = React.useState<SessionsData | undefined>(undefined);
    let [dataRequested, setRequestStatus] = React.useState(false);

    const RenderSessions = () => {
        if (dataRequested) {

            if (session_data.data.length > 0) {
                return session_data.data.map(session_data =>
                    <SessionItem key={session_data.sessionId} data = {session_data}/>
                )
            } else {
                return (
                    <Paper style={{"display":"grid","justifyItems":"center","marginTop":"15px","backgroundColor":"#304254"}}>
                <SilentRunner sx={{ fontSize: 40 }}/>
                <Typography>
                <a>No sessions!</a>
                </Typography>
                </Paper>
                )
            }


        } else {
            return (
                <div className={classes.spinner}>
                <CircularProgress />
            </div>

            )
        }
    }

    // Lucas:
    // Functions passed to useEffect cannot be async.
    React.useEffect(() => {
        async function getSessionsData() {
            const resp = await fetch(AMAX_API_URL + "/sessions", {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setData(await resp.json())
            setRequestStatus(true)
        }

        getSessionsData().catch(() => {
        })
    }, [])



    return (
            <div className={classes.root}>
            <a className="session_item_name">{t('sessions_widget_header')}</a>

            <RenderSessions/>

            </div>

    )
}