import * as React from "react"
import './server_status_item.css';
import CircularProgress from "@material-ui/core/CircularProgress";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next'

const { AMAX_API_URL } = process.env;

export interface ServerStatus {
    server_status: string,
    total_players: number,
    total_sessions: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 15,
            width: 570,
            height: 636,
            /* Blue/700 (2 L) */
            background: "#304254",

            /* Blue/600 */
            border: "1px solid #3E5270",
            boxSizing: "border-box",
            borderRadius: 8,
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
            marginTop: "20px",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        }
    }),
);

export default function ServerStatus() {
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const [serverStatusData,setserverStatusData] = React.useState<ServerStatus | undefined>(undefined);
    const [severDataFlag,setseverDataFlag] = React.useState(false)

    React.useEffect(() => {
        async function getServerData() {
            const resp = await fetch(AMAX_API_URL + "/data/server_status", {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setserverStatusData(await resp.json())
            setseverDataFlag(true)
        }

        getServerData().catch(() => {
        })
    }, [])


    const ServerStatusLabel = () => {
            if (severDataFlag) {
                if (serverStatusData.server_status) {
                    return ( t("server_status_widget.offline") )
                } else {
                    return (t("server_status_widget.online"))
                }
            } else {
                return ("")

            }

    }

    const LedContent = () => {
        if (severDataFlag) {
            if (serverStatusData.data.server_status) {
                return (
                    <div className="server_header_lamp"/>
                )
            } else {
                return (
                    <div className="server_header_lamp_offline"/>
                )
            }
        } else {
            return (<></>)

        }

    }

    const CardContent = () => {
        if (severDataFlag) {
                return (
                    <>
                        <div className="card_item">
                            <div className="card_item_name">{t("server_status_widget.players")}</div>
                            <div className="card_item_value">
                                {serverStatusData.data.server_status
                                    ? serverStatusData.data.total_players
                                    : "Nan"
                                }
                            </div>
                        </div>
                        <br/>
                        <div className="card_item">
                            <div className="card_item_name">{t("server_status_widget.sessions")}</div>
                            <div className="card_item_value">
                                {serverStatusData.data.server_status
                                    ? serverStatusData.data.total_sessions
                                    : "Nan"
                                }
                            </div>
                        </div>
                    </>
                )
            } else {
                return(
                <div className={classes.spinner}>
                    <CircularProgress/>
                </div>
                )
            }

    }
    return (
        <div className ="server_status_widget_container">
            <div className="server_header">
                <a className="server_status_header">{t("server_status_widget.server_status")}</a>
                <a className="server_status">
                    {<ServerStatusLabel/>}
                </a>
                <LedContent/>

            </div>
            <div className="card_container">

            <CardContent/>

            </div>
        </div>
    );
}