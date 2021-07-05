import './leaderboard_player.css';

function Leaderboard_player(player_name,place,level,legend) {
return (
    <div className="player_component">
        <img src="/mod_icons/drifter.png" className="level_icon" alt="logo" />
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