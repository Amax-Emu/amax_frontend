import * as React from "react"
import { useAuthStore } from "./stores"

export function App() {

    const auth = useAuthStore()

    return (
        <>
            {auth.user 
                ? <h1>Hello {auth.user.name}</h1>
                : <button onClick={auth.signIn}>Sign In</button>
            }
        </>
    )
}