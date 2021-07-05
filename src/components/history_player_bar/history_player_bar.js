import './history_player_bar.css'
import player from '../leaderboard_player/leaderboard_player';
import mod_slots from '../mods_slots/mod_slots';

function history_player_bar(data) {
    console.log(data)
    return (

        <div className="history_player_bar">
            <div className="history_player_bar_player">
                {player(data.player_name,data.finish_pos,data.player_level, data.player_legend)}
            </div>
            <div className="history_player_bar_mods">
                {mod_slots(data.mod_1_name,data.mod_2_name,data.mod_3_name)}
            </div>
        </div>

    )


}

export default history_player_bar;