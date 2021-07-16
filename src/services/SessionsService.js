import axios from "axios";

class SessionsDataService {
    getSessions() {
        return axios.get('http://127.0.0.1:8000/sessions') ;
    }

}

export default new SessionsDataService();