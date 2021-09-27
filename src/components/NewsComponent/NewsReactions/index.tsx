import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Reaction} from "../../../compositions/news/index"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            emoji_container: {
            height: 26,
            padding: "4px 8px",
            background: "#304254",
            borderRadius: 4,
                margin: "0px 4px 4px 0px"
        },
            emoji_img: {
                maxHeight: 16,
                maxWidth: 16,
                margin: "0px 4px"
            },
            reactions_container:{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center"

            }
    }
    ))

export default function NewsReactions({reactions_data}:{reactions_data:Array<Reaction>}) {
    const classes = useStyles();
    function ReactionItem({emoji_url,count}:{emoji_url:string,count:number})  {
        return (
            <div className={classes.emoji_container}>
                <img src={emoji_url} className={classes.emoji_img}/>
                <a>{count}</a>
            </div>
        )
    }

    return (
        <div className={classes.reactions_container}>{
        reactions_data.map((reaction) =>
            <ReactionItem emoji_url={reaction.url} count={reaction.count}/>

        )
        }
        </div>
    )
}