import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import player from '../leaderboard_player/leaderboard_player';
import mod_slots from '../mods_slots/mod_slots';


function PlayerTable(data) {
   const classes = makeStyles({
       table: {
           minWidth: 650,
       },
   })

    return (
        <TableContainer component={Paper}>
            <Table     className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Pos.</TableCell>
                        <TableCell align="left">Player</TableCell>
                        <TableCell align="left">Car</TableCell>
                        <TableCell align="center">Mods</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(data).map((key, index) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {key}
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                {player(data[key].player_name,data[key].finish_pos,data[key].player_level, data[key].player_legend)}
                            </TableCell>
                            <TableCell align="left">{data[key].player_car_name}</TableCell>
                            <TableCell align="left">{mod_slots(data[key].mod_1_name,data[key].mod_2_name,data[key].mod_3_name)}</TableCell>
                            <TableCell align="left">{data[key].final_state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PlayerTable;