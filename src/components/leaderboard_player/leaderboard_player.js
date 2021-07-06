import './leaderboard_player.css';

function return_rank_class(level,legend) {
    if (legend > 0) {
        return 'legend' + legend
    } else {
        return 'rank' + level
    }
}

function Leaderboard_player(player_name,place,level,legend) {
return (
    <div className="player_component">

            <div className="rank_container">
                <div className={return_rank_class(level, legend)}/>
            </div>
        <p className="level_value">
            {level}
        </p>
        <p className="player_name">
            {player_name}
        </p>
    </div>
)


}

export default Leaderboard_player;