import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {RacersInfo} from "../../compositions/past_games/past_games";
import PlayerBar from "../player_bar";
import Mod_slots from "./mods_slots/mod_slots";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import * as React from "react"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },       PlayerTable: {
        minWidth: 650,
    },
})

function GetFinalStateName(StateId:number) {
    console.log("GIVE ME STATE")
    console.log(StateId)
    switch (StateId) {
        case 1 :
            return "Unknown"
            break;
        case 2 :
            return "Finished"
            break;
        case 3 :
            return "DNF"
            break;
        case 4 :
            return "Disconnected"
            break;
        default:
            return "Test"
    }
}

export default function PastRaceItemTable({tableData}:{tableData:RacersInfo}) {
    const classes = useStyles();
    console.log(tableData)
    return (
        <TableContainer component={Paper}>
            <Table     className={classes.PlayerTable} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Pos.</TableCell>
                        <TableCell align="left">Player</TableCell>
                        <TableCell align="left">Car</TableCell>
                        <TableCell align="left">Mods</TableCell>
                        <TableCell align="left">Fans</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(tableData).map((key, index) => (
                        <TableRow key={key+1}>
                            <TableCell component="th" scope="row">
                                {key}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                <PlayerBar player_name = {tableData[key].player_name} place = {tableData[key].finish_pos} level = {tableData[key].player_level} legend = {tableData[key].player_legend} />
                            </TableCell>
                            <TableCell align="left">{tableData[key].player_car_name}</TableCell>
                            <TableCell align="center">
                                <div style={{width:"120px"}}>
                                <Mod_slots mod1 = {tableData[key].mod_1_id} mod2 = {tableData[key].mod_2_id}  mod3 = {tableData[key].mod_3_id}  mod1_name = {tableData[key].mod_1_name} mod2_name = {tableData[key].mod_2_name} mod3_name ={tableData[key].mod_3_name}/>
                                </div>
                                </TableCell>
                            <TableCell align="left">{tableData[key].total_fans}</TableCell>
                            <TableCell align="left">{GetFinalStateName(tableData[key].final_state_id)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
