import axios from "axios";

class GameHistoryDataService {
    getTotalPages() {
        return axios.get('http://api.amax-emu.com/data/total_races') ;
    }

    getPage(offset) {

        if (isNaN(offset)) {
            offset = 0
        }

        return axios.get('http://api.amax-emu.com/data/pastraces',{params: {
            offset: offset
        }});
    }
}

export default new GameHistoryDataService();