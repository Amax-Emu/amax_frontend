import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayerBar from "../player_bar";

interface Column {
    id: 'pos' | 'playername' | 'value';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export interface LeaderboardData {
    data: LeaderboardRecord[];
}

export interface LeaderboardRecord {
    PlayerId:        number;
    bdPlayerName:    string;
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
    editedAt:        Date;
}

const columns: Column[] = [
    { id: 'pos', label: 'Pos.', minWidth: 10 },
    { id: 'playername', label: 'Player', minWidth: 100 },
    {
        id: 'value',
        label: 'Value',
        minWidth: 10,
        align: 'right',
    }
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [serverLeaderboardData,setserverStatusData] = React.useState<LeaderboardData | undefined>(undefined);
    const [severLeaderboardDataFlag,setLeaderboardDataFlag] = React.useState(false)

    React.useEffect(() => {
        async function getServerData() {
            const resp = await fetch("http://127.0.0.1:8000/leaderboards/multiplayer", {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setserverStatusData(await resp.json())
            setLeaderboardDataFlag(true)
        }

        getServerData().catch(() => {
        })
    }, [])

    const TableBodyData = () => {
        if (severLeaderboardDataFlag) {

                const temp = serverLeaderboardData.data.map((row,index) =>
                    <TableRow key={row.PlayerId}>
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <PlayerBar player_name={row.bdPlayerName} place={0} legend={row.statLegend} level={row.statLevel}/>
                        </TableCell>
                        <TableCell align="right">{row.statFans}</TableCell>
                    </TableRow>

                )
            console.log(temp)
            return (temp)

        } else {
            return(
            <a>Loading</a>
            )
        }
    }

    return (

                <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                        <TableBodyData/>
                    </TableBody>
                </Table>

    );
}
