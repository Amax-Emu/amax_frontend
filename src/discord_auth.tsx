import * as React from "react"
import { useAuthStore } from "./stores"
import queryString = require('query-string');


export default function set_discord_token() {

    console.log("TEST!")
    const parsed = queryString.parse(location.search)
    console.log(parsed)
    const auth = useAuthStore()
    
    const token = parsed.token
    const refresh_token = parsed.refresh_token

    if (typeof token === "string") {
        console.log(token)
        localStorage.setItem("token", token)
    }

    if (typeof refresh_token === "string") {
        console.log(refresh_token)
        localStorage.setItem("refresh_token", refresh_token)
    }

    auth.signIn()
    return (
<>      
        {auth.user 
            ? <h1>Discord token:  {auth.user.token}</h1>
            : <h1>Fail to log in</h1>
        }
</>
    )
    
}