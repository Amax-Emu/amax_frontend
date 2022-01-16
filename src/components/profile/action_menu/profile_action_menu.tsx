import * as React from "react"
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {Box} from "@material-ui/core";
import {useUserDataStore} from "../../../stores/userdataStore";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useAuthStore} from "../../../stores";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CircularProgress from '@material-ui/core/CircularProgress';
import ChangePasswordForm from "../../../compositions/pasword_change_form/pasword_change_from";


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
        sswidget_container: {
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
        sswidget_icon_value: {
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: "center",
            fontWeight: "bold",
            color: "#E6E6E6",
        },
        sswidgets_container: {
            display: "flex",
            maxWidth: "600px",
            maxHeight: "180px",
            flexWrap: 'wrap',
            flexDirection: "column",
            margin: "1em"

        }, modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, paper: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: 8,
            padding: "1em",
            //border: '2px solid #000',
            boxShadow: theme.shadows[5],
            backdropFilter: "blur(3px)",
            width: 600,

            //padding: theme.spacing(2, 4, 3),
        },
        circularProgress: {
            marginLeft: 0,
            marginRight: theme.spacing.unit,
        },
        ButtonsContainer: {
            display: 'flex',
            flexDirection: "column",
            alignItems: 'flex-start',
            gap: "0.2em",
            justifyContent: 'center'
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

export default function ProfileActionMenu({user_name}: { user_name: string }) {
    const {t, i18n} = useTranslation()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openPasswordModal, setOpenPasswordModal] = React.useState(false);
    const [serverResponse, setResponse] = React.useState<response | undefined>(undefined);
    const [accountChangeServerResponse, setAccountChangeServerResponse] = React.useState<response | undefined>(undefined);
    const [accountChangeLoading, setAccountChangeLoading] = React.useState<boolean>(false);
    const [ChangedFlag, setChanged] = React.useState(false);
    const user = useUserDataStore()
    const auth = useAuthStore()

    const handleModalOpen = () => {
        setAccountChangeLoading(false)
        setAccountChangeServerResponse(undefined)
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
        UpdateProfile();
    };

    const handlePasswordModalClose = () => {
        setOpenPasswordModal(false);
    };

    const handlePasswordModalOpen = () => {
        setOpenPasswordModal(true);
    };


    function UpdateProfile() {
        React.useEffect(() => {
            const poop = async () => {
                await user.getData()
            }
            poop().then(() => {
            })
        })
    }


    const changeAccountType = () => {
        setAccountChangeLoading(true)

        const data = {
            call: "account_change"
        }
        axios.post(AMAX_API_URL + '/players/change_account_type',

            data, {
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${auth.user.token}`
                }
            }
        ).then(response => {
                console.log(response)
                setAccountChangeServerResponse(response.data)
                poop().then(() => {
                })

            }
        )
            .catch(error => {
                console.log(error.response)
                setAccountChangeServerResponse(error.response.data)
                poop().then(() => {
                })

            });
        setAccountChangeLoading(false)
    };


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
                poop().then(() => {
                })
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {
                })
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
                poop().then(() => {
                })
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {
                })
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
                poop().then(() => {
                })
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                console.log(error.response)
                poop().then(() => {
                })
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
                poop().then(() => {
                })
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                poop().then(() => {
                })
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
                poop().then(() => {
                })
                handleClick()
            }
        )
            .catch(error => {
                setResponse(error.response.data);
                poop().then(() => {
                })
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

    const ChangeAccoutButton = () => {
        if (accountChangeLoading !== true) {
            if (accountChangeServerResponse === undefined) {
                return (
                    <Button color="primary" variant="contained" onClick={changeAccountType}>
                        Change account type
                    </Button>
                )

            } else {
                if (accountChangeServerResponse!.success === true) {
                    return (
                        <Button color="primary" variant="contained" disabled>
                            {accountChangeServerResponse!.msg}
                        </Button>
                    )

                } else {
                    return (
                        <Button color="primary" variant="contained" disabled>
                            {accountChangeServerResponse!.msg}
                        </Button>
                    )
                }

            }
        } else {
            return (
                <Button color="primary" variant="contained" disabled>
                    <CircularProgress className={classes.circularProgress} size={20}/>
                    Loading
                </Button>
            )
        }
    }

    const ResultAlert = () => {
        if (serverResponse !== undefined) {
            if (serverResponse.success) {
                return (
                    <Alert onClose={handleClose} severity="success">
                        {serverResponse.msg}
                    </Alert>
                )
            } else {
                return (<Alert onClose={handleClose} severity="error">
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
                return (<Button color="primary" variant="contained" onClick={RemoveFriend}>
                    Remove Friend
                </Button>)
            } else if (user.userData.amax_player_data.friends_purposes.outcoming.includes(user_name)) {
                return (
                    <Button color="primary" variant="contained" onClick={CancelFriendRequest}>
                        Cancel friend request
                    </Button>)
            } else if (user.userData.amax_player_data.friends_purposes.incoming.includes(user_name)) {
                return (
                    <>
                        <Button color="primary" variant="contained" onClick={AcceptFriendRequest}>
                            Accept friend request
                        </Button>
                        <Button color="primary" variant="contained" onClick={DeclineFriendRequest}>
                            Decline friend request
                        </Button>
                    </>
                )
            } else if (user.userData?.amax_player_data.stats.playerName === user_name) {
                return (
                    <>
                    <Button color="primary" variant="contained" onClick={handleModalOpen}>
                        Change account type
                    </Button>

                <Button color="primary" variant="contained" onClick={handlePasswordModalOpen}>
                    Change password
                </Button>
                    </>
                )
            } else {
                return (
                    <Button color="primary" variant="contained" onClick={AddFriendRequest}>
                        Add friend
                    </Button>)
            }
        } else {
            return (<></>)
        }
    }

    return (
        <Box>

            <div className={classes.ButtonsContainer}>
            <AddRemoveFriendButton/>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <ResultAlert/>
            </Snackbar>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.paper}>
                        <Box>
                            <h2 id="transition-modal-title">Attention!</h2>
                            <p id="transition-modal-description">Account type change can't be reversed! You'll
                                lost all your normal account progress. If you're 100% sure press the button
                                below.</p>
                            <ChangeAccoutButton/>
                        </Box>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openPasswordModal}
                onClose={handlePasswordModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openPasswordModal}>
                    <div className={classes.paper}>
                        <Box>
                            <ChangePasswordForm/>
                            <Button color="primary" variant="contained" onClick={handlePasswordModalClose}>
                                Close
                            </Button>
                        </Box>
                    </div>
                </Fade>
            </Modal>

        </Box>
    )
}