import { useParams } from 'react-router-dom';
import * as React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import PlayerCard from "../../components/profile/player_card";
import SvgIcon from "@material-ui/core/SvgIcon";
import * as moment from "moment";

const { AMAX_API_URL } = process.env;

export interface AmaxGeneralUserData {
    error:     boolean;
    error_msg: string;
    data:      Data;
}

export interface Data {
    amaxPlayerData: AmaxPlayerData;
    banData:        BanData;
    player_name:    string;
    isOnline:       boolean;
    status:         number;
    isGameBanned:   boolean;
}

export interface AmaxPlayerData {
    amaxPastGames:    string;
    amaxLevelingData: AmaxLevelingData;
    amaxStatsData:    AmaxStatsData;
}

export interface AmaxLevelingData {
    level:       number;
    legend:      number;
    fansTotal:   number;
    fansCurrent: number;
    fansNeeded:  number;
}

export interface AmaxStatsData {
    statLevel:       number;
    statFans:        number;
    statRaceTime:    number;
    statDriverScore: number;
    statTop3:        number;
    statRaces:       number;
    statFirst:       number;
    statHits:        number;
    statFired:       number;
    statWrecked:     number;
    statLegend:      number;
    statLegendTime:  number;
}

export interface BanData {
    ban_reason: string;
    ban_start: string;
    ban_end: string;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 15,
            width: 570,
            height: 636,
            /* Blue/700 (2 L) */
            background: "#304254",

            /* Blue/600 */
            border: "1px solid #3E5270",
            boxSizing: "border-box",
            borderRadius: 8,
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
        },
        CustomIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24"
        },
        sswidget_container:{
            display: 'flex',
            flexDirection: "column"
        }
    }),
);

function DiscordIcon() {
    const classes = useStyles();

    return (
        <SvgIcon className={classes.CustomIcon}>
            <path d="M23.5888 5.10296L19.3257 10.6287L19.3118 10.6247L19.2978 10.6208L19.2838 10.6169L19.2697 10.613L19.2557 10.6091L19.2417 10.6053L19.2279 10.6016L19.2142 10.5979L19.2006 10.5942L19.1874 10.5907V10.5926L19.1192 10.578L19.0514 10.5652L18.9838 10.554L18.9166 10.5443L18.8496 10.5363L18.783 10.5297L18.7169 10.5248L18.6511 10.5212L18.5859 10.5191L18.5211 10.5184L18.2112 10.5376L17.9174 10.5824L17.6394 10.65L17.3774 10.7375L17.1311 10.8419L16.9004 10.9604L16.6854 11.0899L16.4857 11.2276L16.3015 11.3706L16.1325 11.516L15.9637 11.3706L15.7797 11.2277L15.5803 11.0899L15.3655 10.9604L15.135 10.8419L14.8889 10.7375L14.6271 10.65L14.3495 10.5824L14.0558 10.5376L13.7462 10.5184L13.6811 10.5191L13.6157 10.5212L13.5498 10.5248L13.4835 10.5298L13.4169 10.5363L13.3498 10.5443L13.2824 10.554L13.2147 10.5652L13.1466 10.578L13.0783 10.5926L12.8768 10.644L12.6675 10.7097L12.4518 10.79L12.2313 10.8854L12.0073 10.9961L11.7813 11.1225L11.5549 11.265L11.3294 11.4241L11.1064 11.5999L10.8872 11.793L10.6763 12.0028L10.475 12.2329L10.2861 12.483L10.1128 12.7525L9.95797 13.041L9.82475 13.348L9.71607 13.673L9.63504 14.0156L9.58453 14.3752L9.56765 14.7515L9.60317 15.2713L9.70044 15.8061L9.86298 16.3565L10.0946 16.9233L10.399 17.507L10.7799 18.1085L11.241 18.7283L11.7861 19.3674L12.4188 20.0262L13.1429 20.7055H8.18275L7.73525 20.669L7.3151 20.5632L6.92764 20.3941L6.57834 20.1675L6.27266 19.8892L6.01606 19.5651L5.81406 19.201L5.672 18.8028L5.59539 18.3763L5.58972 17.9273L5.96246 12.5168L5.9625 12.5134L5.9627 12.51L5.96298 12.5067L5.96334 12.5035L5.96371 12.5002L5.96411 12.497L5.96455 12.4938L5.96491 12.4906L5.96524 12.4873L5.96553 12.484L5.92516 12.4513L5.88529 12.4178L5.84602 12.3832L5.80743 12.3476L5.76946 12.3109L5.73235 12.2729L5.69614 12.2337L5.66085 12.1932L5.62666 12.1513L5.59356 12.108L0.382898 5.00324L0.219416 4.7398L0.101615 4.46277L0.0286759 4.17738L0 3.88911L0.0147703 3.60316L0.0723383 3.325L0.172032 3.05993L0.313082 2.8133L0.494768 2.59045L0.716442 2.39676L0.967921 2.24324L1.23523 2.13682L1.51293 2.07645L1.79575 2.06122L2.07838 2.09013L2.35551 2.16221L2.62181 2.27648L2.87196 2.43196L3.10063 2.62768L3.30256 2.86268L8.38564 9.79755L8.43714 9.78751L8.48884 9.77848L8.5407 9.77034L8.59272 9.76318L8.64483 9.75701L8.69714 9.75182L8.74955 9.74764L8.80209 9.74447L8.85471 9.74236L8.90748 9.74125L8.65033 9.48648L8.41437 9.21188L8.20093 8.91861L8.01142 8.6081L7.84719 8.28159L7.70972 7.94048L7.60035 7.58609L7.52049 7.21972L7.47157 6.84268L7.45495 6.45635L7.51324 5.73356L7.68205 5.04793L7.95214 4.40856L8.31444 3.82464L8.75963 3.30536L9.27868 2.85992L9.86233 2.49748L10.5014 2.22722L11.1869 2.05831L11.9094 2L12.6321 2.05831L13.3178 2.22722L13.9571 2.49748L14.541 2.85994L15.0602 3.30536L15.5055 3.82462L15.8679 4.40854L16.1382 5.04791L16.307 5.73359L16.3653 6.45635L16.3486 6.84268L16.2997 7.21974L16.2198 7.58611L16.1103 7.94051L15.9727 8.28159L15.8084 8.60805L15.6188 8.91859L15.4052 9.21185L15.1692 9.48651L14.912 9.74125L14.9615 9.74233L15.011 9.74445L15.0603 9.7475L15.1095 9.75153L15.1584 9.75638L15.2073 9.7621L15.256 9.76863L15.3045 9.77588L15.3527 9.78388L15.4008 9.79255L20.7237 2.89227L20.9313 2.66212L21.1649 2.47202L21.4189 2.32274L21.688 2.21509L21.9668 2.14991L22.2501 2.12803L22.5325 2.15025L22.8086 2.2174L23.0731 2.3303L23.3206 2.48975L23.5376 2.68865L23.7139 2.91585L23.8488 3.16575L23.9419 3.43312L23.9925 3.71256L24 3.99872L23.964 4.2862L23.8838 4.56964L23.7589 4.84367L23.5888 5.10296Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.842 19.5545L16.1578 21.2704L18.4734 19.5545L20.0712 18.0159L21.0498 16.6527L21.5081 15.4631L21.5448 14.4451L21.2587 13.597L20.7485 12.9168L20.1131 12.4027L19.4512 12.0528L18.8615 11.8653L18.8132 11.8559L18.7654 11.8477L18.7177 11.8405L18.6705 11.8343L18.6235 11.829L18.5768 11.8248L18.5305 11.8216L18.4845 11.8193L18.4388 11.8179L18.3935 11.8174L18.0778 11.8394L17.7799 11.9009L17.5006 11.995L17.2411 12.1151L17.0025 12.2543L16.7857 12.4058L16.5917 12.5629L16.4218 12.7188L16.2768 12.8668L16.1578 13L16.0387 12.8668L15.8936 12.7189L15.7236 12.5629L15.5297 12.4058L15.3129 12.2543L15.0743 12.1151L14.8149 11.995L14.5357 11.9009L14.2378 11.8394L13.9222 11.8174L13.8768 11.8179L13.8311 11.8193L13.7851 11.8216L13.7388 11.8248L13.6921 11.829L13.6451 11.8343L13.5977 11.8405L13.5499 11.8477L13.5018 11.856L13.4534 11.8653L12.8639 12.0528L12.2021 12.4027L11.5668 12.9168L11.0566 13.597L10.7705 14.4451L10.8072 15.4631L11.2655 16.6527L12.2442 18.0159L13.842 19.5545ZM17.3334 19.1797L16.1578 20.0484L14.9822 19.1797L14.0315 18.3817L13.283 17.6541L12.7137 16.9971L12.3006 16.4106L12.0211 15.8945L11.8522 15.4488L11.771 15.0735L11.7546 14.7684L11.7803 14.5336L11.8668 14.2451L12.0022 13.9832L12.1765 13.7479L12.3799 13.5394L12.6025 13.3578L12.8344 13.2033L13.0657 13.076L13.2865 12.976L13.4869 12.9034L13.657 12.8584L13.6837 12.8531L13.7105 12.8484L13.7372 12.8442L13.7639 12.8405L13.7904 12.8373L13.817 12.8347L13.8434 12.8327L13.8698 12.8312L13.896 12.8303L13.9222 12.83L14.1237 12.8464L14.3168 12.8922L14.5001 12.9618L14.6722 13.0498L14.8316 13.1507L14.9769 13.259L15.1066 13.3694L15.2192 13.4764L15.3134 13.5744L15.3878 13.6581L16.1578 14.5603L16.9279 13.6581L17.0021 13.5744L17.0963 13.4764L17.2089 13.3694L17.3386 13.259L17.4837 13.1507L17.6431 13.0498L17.8152 12.9618L17.9986 12.8922L18.1918 12.8465L18.3935 12.83L18.4196 12.8303L18.4458 12.8312L18.472 12.8326L18.4984 12.8347L18.5248 12.8373L18.5513 12.8405L18.5779 12.8442L18.6045 12.8484L18.6311 12.8531L18.6579 12.8584L18.8282 12.9034L19.0288 12.976L19.2497 13.076L19.4811 13.2033L19.7131 13.3578L19.9357 13.5394L20.1391 13.7479L20.3135 13.9832L20.4489 14.2452L20.5354 14.5336L20.561 14.7684L20.5446 15.0735L20.4634 15.4488L20.2946 15.8945L20.015 16.4106L19.602 16.9971L19.0327 17.6541L18.2841 18.3816L17.3334 19.1797Z" fill="white"/>
        </SvgIcon>
    );
}

function SingleStatWidget({statName,value}:{statName: string,value:(number|string)}) {
    const classes = useStyles();

    let value2 = value

    if (statName === "statRaceTime") {
        value2 = moment.utc(moment.duration(value, 'seconds').asMilliseconds()).format('HH:mm:ss')
    }
    return (
        <div>
        <DiscordIcon/> <a>{statName}</a> <a>{value2}</a>
        <div className={classes.sswidget_container}>

        </div>
        </div>
    )
}

export default function PlayerProfile () {
    let  {profileName} = useParams<{profileName: string}>();
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const [targetPlayerData,settargetPlayerData] = React.useState<AmaxGeneralUserData | undefined>(undefined);
    const [severDataFlag,setseverDataFlag] = React.useState(false)

    React.useEffect(() => {
        async function getServerData() {
            const resp = await fetch(AMAX_API_URL + "/players/name/"+profileName, {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            settargetPlayerData(await resp.json())
            setseverDataFlag(true)
        }

        getServerData().catch(() => {
        })
    }, [])



    return (
        <>
            {severDataFlag
                ? (<div>
                    <PlayerCard playerName={profileName} playerCurrentExp={targetPlayerData.data.amaxPlayerData.amaxLevelingData.fansCurrent} playerLevel={targetPlayerData.data.amaxPlayerData.amaxLevelingData.level + 1} playerLegend={targetPlayerData.data.amaxPlayerData.amaxLevelingData.legend} playerLevelupExp={targetPlayerData.data.amaxPlayerData.amaxLevelingData.fansNeeded} playerPfpUrl={"123"}/>
                    <SingleStatWidget statName={"Fans"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statFans}/>
                    <SingleStatWidget statName={"Driver Score"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statDriverScore}/>
                    <SingleStatWidget statName={"Total races"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statRaces}/>
                    <SingleStatWidget statName={"First"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statFirst}/>
                    <SingleStatWidget statName={"Top 3"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statTop3}/>
                    <SingleStatWidget statName={"Fired"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statFired}/>
                    <SingleStatWidget statName={"statWrecked"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statWrecked}/>

                    <SingleStatWidget statName={"statRaceTime"} value={targetPlayerData.data.amaxPlayerData.amaxStatsData.statRaceTime}/>
                    </div>


                ) : ( <a>Loading</a> )
            }
        </>
);
}
