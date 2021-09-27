import * as React from "react";
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import DiscordNewsComponent from "../../components/NewsComponent";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface DiscordNewsData{
    data: DiscordNews[];
}

export interface DiscordNews {
    text:              string;
    author_name:       AuthorName;
    author_avatar_url: string;
    jump_url:          string;
    channel_name:      ChannelName;
    attachments:       Attachment[];
    embeds:            Embed[];
    reactions:         Reaction[];
}

export interface Attachment {
    content_type?: string;
    url:           string;
    height:        number;
    width:         number;
    proxy_url?:    string;
}

export enum AuthorName {
    Aibot = "Aibot",
}

export enum ChannelName {
    Announcements = "announcements",
}

export interface Embed {
    thumbnail?:   Attachment;
    provider?:    Provider;
    type:         Type;
    description?: string;
    url:          string;
    title?:       string;
    color?:       number;
}

export interface Provider {
    name: string;
    url?: string;
}

export enum Type {
    Image = "image",
    Link = "link",
}

export interface Reaction {
    count: number;
    url:   string;
    text: string;
}



export default function NewsPage() {
    //const classes = useStyles();
    const [discordNewsData,setdiscordNewsData] = React.useState<DiscordNewsData | undefined>(undefined);
    const [discordNewsFlag,setdiscordNewsFlag] = React.useState(false)

    React.useEffect(() => {
        async function getDiscordNews() {
            const resp = await fetch("http://127.0.0.1:8000/data/news", {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setdiscordNewsData(await resp.json())
            setdiscordNewsFlag(true)
        }

        getDiscordNews().catch(() => {
        })
    }, [])

    return (
        <>
        {discordNewsFlag
                ? discordNewsData.data.map((NewsItemData) =>
                    <DiscordNewsComponent data={NewsItemData}/>
                    )
                : <div>none</div>        }
        </>
    )

}