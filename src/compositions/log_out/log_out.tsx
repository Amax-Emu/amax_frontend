import * as React from "react"
import { useAuthStore} from "../../stores";
import {useUserDataStore} from "../../stores/userdataStore";
import {Container, Typography} from "@mui/material";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";



export default function LogOut() {
    const auth = useAuthStore()
    const user = useUserDataStore()
    const history = createBrowserHistory({forceRefresh:true});
    user.clearData()
    auth.signOut()

    //history.push("/Dashboard");
    React.useEffect(() => {
        setTimeout(() => {
            history.push('/Dashboard')
        }, 1000)
    }, [])

    return (
        <Container>
            <Typography>
                <a><strong>Successfully loged out!</strong></a>
            </Typography>
        </Container>
    )

}

