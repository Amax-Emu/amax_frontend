import './App.css';
import history_game_item from "../../history_game_item/history_game_item";
import React, { Component} from 'react';
import GameHistoryService from "../../services/GameHistoryService";
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import PaginationRounded from "@material-ui/lab/Pagination";

export default class GameHistoryApp extends Component {
    constructor(props) {
        super(props);
        // this.retrieveHistory = this.retrieveHistory.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        //this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            PastGames: [],
            currentIndex: -1,

            page: 1,
            count: 0,
            pageSize: 10,
        };
    }

    componentDidMount() {
        this.InitApp();
    }

    getRequestParams(page, pageSize) {
        let params = {};

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

    InitApp() {
        const { page, pageSize } = this.state;
        const params = this.getRequestParams(page, 10);

        GameHistoryService.getPage(params.page*pageSize)
            .then((response) => {
                const PastGames = response.data.data;

                this.setState({
                    PastGames: PastGames,
                });
                console.log(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });

        GameHistoryService.getTotalPages()
            .then((response) => {
                const TotalPages = parseInt(response.data.data/10)+1;

                this.setState({
                    count: TotalPages,
                });
                console.log(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });

    }

    handlePageChange(event, value) {
        this.setState(
            {
                page: value,
            },
            () => {
                this.InitApp();
                this.props.history.replace({ pathname: `/history/${this.state.page}`})
            }
        );
    }


    render() {

        const {
            PastGames,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return(

            <div className="App">
                <header className="App-header">
                    {
                        PastGames.map(PastGame => {

                            return (
                                <div>
                                    {history_game_item(PastGame)}
                                </div>
                            )
                        })

                    }
                </header>
                <PaginationRounded
                    className="my-3"
                    count={count}
                    page={page}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    onChange={this.handlePageChange}
                />
            </div>

        )
    }
    }

