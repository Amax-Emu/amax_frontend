import * as React from "react"
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {Box} from "@material-ui/core";
import {useUserDataStore} from "../../../stores/userdataStore";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useAuthStore} from "../../../stores";
const {AMAX_API_URL} = process.env;

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
        },
        CustomIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24",
            // boxShadow: "inset 0px 0px 4px rgba(120, 179, 233, 0.6)",
            // filter: "drop-shadow(0px 0px 20px rgba(4, 90, 255, 0.9))"
        },
        sswidget_container:{
            display: 'inline-flex',
            flex: "0 1 auto",
            flexBasis: "33.33%",
            flexDirection: "column",
            flexWrap: 'wrap',
            width: "33%",
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "155%",
            marginTop: "1em",
            marginBottom: "1em",

            /* identical to box height, or 25px */

            /* Blue / 50 */
            color: "#92929F",

        },
        sswidget_icon_value:{
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: "center",
            fontWeight: "bold",
            color: "#E6E6E6",
        },
        sswidgets_container:{
            display: "flex",
            maxWidth: "600px",
            maxHeight: "180px",
            flexWrap: 'wrap',
            flexDirection: "column",
            margin: "1em"

        }
    }),
);

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type response = {
    success: boolean;
    msg: string;
}

export default function ProfileActionMenu({user_name}:{user_name:string}) {
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [serverResponse, setResponse] = React.useState<response | undefined>(undefined);
    const [ChangedFlag, setChanged] = React.useState(false);
    const user = useUserDataStore()
    const auth = useAuthStore()

    function UpdateProfile() {
        console.log('render!');
        React.useEffect(() => {
            console.log('render!');
            const poop = async () => {
                await user.getData()
            }
            poop().then(() => {})
        })
    }



    const AddFriendRequest = () => {
        const data = {
            username: user_name
        }
        axios.post(AMAX_API_URL + '/players/add_friend',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setResponse(response.data)
            poop().then(() => {})
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {})
                handleClick()
            });

    };

    const AcceptFriendRequest = () => {
        const data = {
            username: user_name
        }
        axios.post(AMAX_API_URL + '/players/accept_friend_request',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setResponse(response.data)
                poop().then(() => {})
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {})
                handleClick()
            });

    };

    const DeclineFriendRequest = () => {
        const data = {
            username: user_name
        }
        axios.post(AMAX_API_URL + '/players/decline_friend_request',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setResponse(response.data)
                poop().then(() => {})
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {})
                handleClick()
            });

    };

    const poop = async () => {
        await user.getData()
    }

    const CancelFriendRequest = () => {
        const data = {
            username: user_name
        }
        axios.post(AMAX_API_URL + '/players/cancel_friend_request',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setResponse(response.data)
            poop().then(() => {})
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                poop().then(() => {})
                console.log(error.response)
                handleClick()
            });

    };

    const RemoveFriend = () => {
        const data = {
            username: user_name
        }
        axios.post(AMAX_API_URL + '/players/remove_friend',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setResponse(response.data)
                poop().then(() => {})
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                poop().then(() => {})
                console.log(error.response)
                handleClick()
            });

    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const ResultAlert = () => {
        if (serverResponse !== undefined) {
            if (serverResponse.success) {
                return (
                    <Alert onClose={handleClose} severity="success">
                        {serverResponse.msg}
                    </Alert>
                )
            } else {
                return ( <Alert onClose={handleClose} severity="error">
                    {serverResponse.msg}
                </Alert>
                )
            }
        } else {
            return (<></>)
        }
    }

    const AddRemoveFriendButton = () => {
        if (user.userData?.amax_account) {
            if (user.userData.amax_player_data.friends.some(e => e.name === user_name)) {
                return (<Button color="primary" onClick={RemoveFriend}>
                    Remove Friend
                </Button>)
            } else if (user.userData.amax_player_data.friends_purposes.outcoming.includes(user_name)) {
                return (
                    <Button color="primary" onClick={CancelFriendRequest}>
                    Cancel friend request
                </Button>)
            } else if (user.userData.amax_player_data.friends_purposes.incoming.includes(user_name)) {
                return (
                    <>
                    <Button color="primary" onClick={AcceptFriendRequest}>
                        Accept friend request
                    </Button>
                    <Button color="primary" onClick={DeclineFriendRequest}>
                        Decline friend request
                    </Button>
                    </>
                )
            } else {
                return (
                    <Button color="primary" onClick={AddFriendRequest}>
                        Add friend
                    </Button>)
            }
        }  else {
            return (<></>)
        }
    }

    return (
        <Box>

            <AddRemoveFriendButton/>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <ResultAlert/>
            </Snackbar>
        </Box>
    )
}