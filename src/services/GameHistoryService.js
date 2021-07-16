import axios from "axios";

class GameHistoryDataService {
    getTotalPages() {
        return axios.get('http://127.0.0.1:8000/total_races') ;
    }

    getPage(offset) {

        if (isNaN(offset)) {
            offset = 0
        }

        return axios.get('http://127.0.0.1:8000/pastraces',{params: {
            offset: offset
        }});
    }
}

export default new GameHistoryDataService();