import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import "./NewsAuthor.css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 200,
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "auto auto",
            gridTemplateRows: "1fr",
            gap: "0px 0px",
            gridTemplateAreas:
            "avatar data",
            width: "100%",
            height: "100%"
            },
            avatar_container:{
            gridArea: "avatar"
            },
            data_container:{
                gridArea: "data"

            },
        username: {
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: "120%",
            textShadow: "0px 0px 20px rgba(4, 181, 0, 0.7)",
            backdropFilter: "blur(8px)",
            margin: "4px 0px"

        },
            avatar: {
                margin: "0px 8px"
            }
    }
    )
)

export default function NewsAuthor({avatar_url,author_name,post_date}:{avatar_url:string, author_name:string, post_date:string}) {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="avatar_container">
            <Avatar className={classes.avatar} src={avatar_url}/>
            </div>
            <div className="data_container">
            <a className={classes.username}>{author_name}</a>
            <a>{post_date}</a>
            </div>
        </div>
    )
}
