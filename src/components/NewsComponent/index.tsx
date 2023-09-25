import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import {DiscordNews} from "../../compositions/news";
import Typography from "@material-ui/core/Typography";
import NewsAuthor from "./NewsAuthor";
import NewsReactions from "./NewsReactions";
import remarkGfm from 'remark-gfm'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            minWidth: "40vw",
            maxWidth: "700px",
            background: "#2C3845",
            marginBottom: "1em",
            marginTop: "1em",
            borderRadius: 4,
            justifySelf: "center",
            padding: "1em"
        },
        container: {
            width: "100%",
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
        }, imageList: {
            width: "100%",
        },
        a_img_container: {
            height: "100%",
        },
    }),
);


export default function DiscordNewsComponent({data}: { data: DiscordNews }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <Typography>
                <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>{data.text}</ReactMarkdown>
            </Typography>


            <ImageList rowHeight={160} className={classes.imageList} cols={2}>
                {data.embeds?.map((item,i) => (
                    <ImageListItem key={i} cols={1} className={classes.imageList}>
                        <a href={item.url} className={classes.a_img_container}>
                    <img src={item.thumbnail?.url} alt={item.title} className={classes.a_img_container}/>
                        </a>
                    </ImageListItem>
                ))}

                {data.attachments?.map((item,i) => (
                    <ImageListItem key={i} cols={1} className={classes.imageList}>
                        <a href={item.url} className={classes.a_img_container}>
                            <img src={item.url} className={classes.a_img_container}/>
                        </a>
                    </ImageListItem>
                ))}
            </ImageList>

            <NewsAuthor author_name={data.author_name} post_date={data.timestamp} avatar_url={data.author_avatar_url}/>
            <NewsReactions reactions_data={data.reactions}/>
        </div>
        </div>
    )
}