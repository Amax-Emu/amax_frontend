import './App.css';
import history_game_item from "../../history_game_item/history_game_item";
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactPaginate from 'react-paginate';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from "@material-ui/core/useMediaQuery";

function History_app() {


    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    const [comments, setComments] = useState([])


    let state = {
        offset: 0,
    };


    useEffect(() => {

        fetchComments();

    }, [])

    useEffect(() => {

        console.log(comments["data"])

    }, [comments])

    const fetchComments = async () => {

        const response = await Axios.get('http://127.0.0.1:8000/pastraces',{
            params: {
                offset: state.offset
            }}
            );

        setComments(response.data.data)

    }



    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);
        state.offset = offset
            fetchComments();
    };
    return (

        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>

            <header className="App-header">
                {
                    comments.map(comment => {

                        return (
                            <div>
                                {history_game_item(comment)}
                            </div>
                        )
                    })

                }
            </header>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            </ThemeProvider>
        </div>
    );
}

export default History_app;
