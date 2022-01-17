import * as React from "react"
import { useAuthStore } from "./stores"
const { AMAX_API_URL } = process.env;
function user_data_getter() {
    const auth = useAuthStore()

    const headers = {"Content-Type": "application/json"};

    headers["Authorization"] = `Bearer ${auth.user.token}`;
    
    fetch(AMAX_API_URL +"/players/@me", {headers,})
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData
    })
    .catch(error => console.warn(error));
 
    
}

export default function get_user_data() {
    const auth = useAuthStore()
    if (auth.user) {

    let user_data_request = {}
    user_data_getter()
    return (
        <h1>Logged in</h1>


    )
}else {
    return (
<h1>You're not logged in</h1>
    )
}
}