import * as React from "react"
import { useAuthStore } from "./stores"
import queryString = require('query-string');
import {useUserDataStore} from "./stores/userdataStore";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";



export default function set_discord_token() {
    const parsed = queryString.parse(location.search)
    const auth = useAuthStore()
    const user = useUserDataStore()
    const history = createBrowserHistory({forceRefresh:true});
    const token = parsed.token
    const refresh_token = parsed.refresh_token

    if (typeof token === "string") {
        localStorage.setItem("token", token)
    }

    if (typeof refresh_token === "string") {
        localStorage.setItem("refresh_token", refresh_token)
    }

    // auth.signIn()
    // user.getData()

    React.useEffect(() => {
        setTimeout(() => {
            history.push('/Dashboard')
        }, 1000)
    }, [])

    return (
<>      
        {auth.user
            ? <h1>Discord login is successful</h1>
            : <h1>Fail to log in</h1>
        }
</>
    )
    
}