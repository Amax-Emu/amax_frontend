import './appbar_player.css';
import CustomizedProgressBars from './expirience_bar';

function return_rank_class(level,legend) {
    if (legend > 0) {
        return 'appbar_legend' + legend
    } else {
        return 'appbar_rank' + level
    }
}

function Appbar_user(player_name,level,legend) {
    return (
        <div className="appbar_player_component">
            <div className="appbar_rank_wrapper">
                <div className="appbar_rank_container">
                    <div className={return_rank_class(level, legend)}/>
                </div>
            </div>
            <p className="appbar_level_value">
                {level}
            </p>
            <CustomizedProgressBars/>
            <p className="appbar_player_name">
                {player_name}
            </p>

        </div>
    )


}

export default Appbar_user;