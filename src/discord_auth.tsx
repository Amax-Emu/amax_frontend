import * as React from "react"
import { useAuthStore } from "./stores"
import queryString = require('query-string');


export default function set_discord_token() {


    const parsed = queryString.parse(location.search)

    const auth = useAuthStore()
    
    const token = parsed.token
    const refresh_token = parsed.refresh_token
    
    localStorage.setItem("token",token)
    localStorage.setItem("refresh_token",refresh_token)
    
    
    console.log(token)
    auth.signIn()
    return (
<>      
        {auth.user 
            ? <h1>Hello  {auth.user.token}</h1>
            : <h1>Fail to log in</h1>
        }
</>
    )
    
}