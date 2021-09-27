import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Reaction} from "../../../compositions/news/index"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            emoji_container: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
            height: 26,
            padding: "4px 8px",
            background: "#304254",
            borderRadius: 4,
                margin: "2px 2px 2px 2px"
        },
            emoji_img: {
                maxHeight: 16,

                margin: "0px 4px"
            },
            reactions_container:{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center"

            },
            emoji_text: {
                height: 16,
                wight: 16,
                margin: "0px 4px"
            }
    }
    ))

export default function NewsReactions({reactions_data}:{reactions_data:Array<Reaction>}) {
    const classes = useStyles();
    function ReactionItem({emoji_url,emoji_text,count}:{emoji_url:string,emoji_text:string,count:number})  {
        return (
            <div className={classes.emoji_container}>
                {emoji_url === ""
                    ? <a className={classes.emoji_text}>{emoji_text}</a>
                    : <img src={emoji_url} className={classes.emoji_img}/>
                }
                <a>{count}</a>
            </div>
        )
    }

    return (
        <div className={classes.reactions_container}>{
        reactions_data.map((reaction) =>
            <ReactionItem emoji_url={reaction.url} emoji_text={reaction.text} count={reaction.count}  />

        )
        }
        </div>
    )
}