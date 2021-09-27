import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import {DiscordNews} from "../../compositions/news";
import Typography from "@material-ui/core/Typography";
import NewsAuthor from "./NewsAuthor";
import NewsReactions from "./NewsReactions";
import remarkGfm from 'remark-gfm'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 700,
            padding: 32,
            background: "#2C3845",


            borderRadius: 4,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        spinner: {
            display: 'flex',
            marginLeft: "calc(50% - 25px)",
            marginTop: "20px",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        }
    }),
);


export default function DiscordNewsComponent({data}:{data: DiscordNews}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={"https://via.placeholder.com/350x150"}/>
            <Typography>
        <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]} >{data.text}</ReactMarkdown>
            </Typography>
            <NewsAuthor author_name={data.author_name} post_date={"01.01.2021"} avatar_url={data.author_avatar_url}/>
            <NewsReactions reactions_data={data.reactions}/>
        </div>
    )
}