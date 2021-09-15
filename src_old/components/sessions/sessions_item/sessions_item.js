import "./sessions_item.css";
import React, {Component} from "react";
import session_item from "../session_item/session_item";
import SessionsDataService from "../../../services/SessionsService"
import GameHistoryService from "../../../services/GameHistoryService";

let sessions_data = [{
    sessionId: "e30b1193ff269994",
    ownerHash: "8fdfb386112ebb52",
    created: "Tue Jul  6 13:46:31 2021",
    gameType: "1786934394",
    session_dummy1: 0,
    available_slots: 9,
    session_dummy2: 1,
    session_dummy3: 34,
    session_dummy4: 0,
    session_dummy5: 1,
    session_dummy6: 196619,
    session_dummy7: 0,
    session_dummy8: 0,
    players_list: [{
        sessionId: "e30b1193ff269994",
        bdPlayerId: "8fdfb386112ebb52",
        bdPlayerName: "SynC",
        statLevel: 34,
        statLegend: 0
    },
        {
            sessionId: "e30b1193ff269994",
            bdPlayerId: "8fdfb386112ebb52",
            bdPlayerName: "WWWWWWWWWWWWW",
            statLevel: 5,
            statLegend: 0
        },
        {
            sessionId: "e30b1193ff269994",
            bdPlayerId: "8fdfb386112ebb52",
            bdPlayerName: "Aibot",
            statLevel: 1,
            statLegend: 0
        }
        ,
        {
            sessionId: "e30b1193ff269994",
            bdPlayerId: "8fdfb386112ebb52",
            bdPlayerName: "LikhtHammer",
            statLevel: 1,
            statLegend: 0
        }]
},
    {
        sessionId: "e30b1193ff269994",
        ownerHash: "8fdfb386112ebb52",
        created: "Tue Jul  6 13:46:31 2021",
        gameType: "1786934394",
        session_dummy1: 0,
        available_slots: 9,
        session_dummy2: 1,
        session_dummy3: 34,
        session_dummy4: 0,
        session_dummy5: 1,
        session_dummy6: 196619,
        session_dummy7: 0,
        session_dummy8: 0,
        players_list: [{
            sessionId: "e30b1193ff269994",
            bdPlayerId: "8fdfb386112ebb52",
            bdPlayerName: "SynC",
            statLevel: 34,
            statLegend: 0
        },
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "WWWWWWWWWWWWW",
                statLevel: 5,
                statLegend: 0
            },
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "Aibot",
                statLevel: 1,
                statLegend: 0
            }
            ,
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "LikhtHammer",
                statLevel: 1,
                statLegend: 0
            }]
    }];

export default class SessionsItem extends Component {
    constructor(props) {
        super(props);
        // this.retrieveHistory = this.retrieveHistory.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        //this.handlePageChange = this.handlePageChange.bind(this);
        //this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            sessions: [],
        };
    }



    componentDidMount() {
        this.InitApp();
    }

    InitApp() {
        SessionsDataService.getSessions()
            .then((response) => {
                const Sessions = response.data.data;

                this.setState({
                    //sessions: Sessions,
                    sessions: sessions_data,
                });
                console.log(this.sessions);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {

        const {
            sessions,
        } = this.state;

        return (
            <div className="sessions_item_container">
                {
                    sessions.map(session_data => {
                        return (session_item(session_data))
                    })
                }
            </div>
        )
    }


}