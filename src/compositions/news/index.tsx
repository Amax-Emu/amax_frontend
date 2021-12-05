import * as React from "react";
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
import DiscordNewsComponent from "../../components/NewsComponent";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Container} from "@mui/material";
import {Grid} from "@mui/material";

const { AMAX_API_URL } = process.env;

export interface DiscordNewsData{
    data: DiscordNews[];
}

export interface DiscordNews {
    text:              string;
    author_name:       string;
    author_avatar_url: string;
    jump_url:          string;
    channel_name:      string;
    attachments:       Attachment[];
    embeds:            Embed[];
    reactions:         Reaction[];
    timestamp:         Date;
}

export interface Attachment {
    content_type?: string;
    url:           string;
    height:        number;
    width:         number;
    proxy_url?:    string;
}

export interface Embed {
    thumbnail?:   Attachment;
    provider?:    Provider;
    type:         string;
    description?: string;
    url:          string;
    title?:       string;
    color?:       number;
}

export interface Provider {
    name: string;
    url?: string;
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
            const resp = await fetch(AMAX_API_URL + "/data/news", {

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
        <Container>
            <Grid   container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
        {discordNewsFlag
                ? discordNewsData.data.map((NewsItemData) =>
                    <DiscordNewsComponent data={NewsItemData}/>
                    )
                : <div>none</div>        }
            </Grid>
        </Container>
    )

}