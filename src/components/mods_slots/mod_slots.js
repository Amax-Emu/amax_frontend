import './mod_slots.css'

function get_mod_icon(mod_id) {
    let mod_icon = '';
    switch (mod_id) {
        case 1:
            mod_icon = "iron_fist.png"
            break;
        case 2:
            mod_icon = "jump_the_gun.png"
            break;
        case 3:
            mod_icon = "front_runner.png"
            break;
        case 4:
            mod_icon = "drifter.png"
            break;
        case 5:
            mod_icon = "titanium_armor.png"
            break;
        case 6:
            mod_icon = "showy_flourish.png"
            break;
        case 7:
            mod_icon = "stable_frame.png"
            break;
        case 8:
            mod_icon = "battering_ram.png"
            break;
        case 9:
            mod_icon = "placeholder.png" //decoy drop
            break;
        case 10:
            mod_icon = "placeholder.png" //road sweep
            break;
        case 11:
            mod_icon = "scrambler.png"
            break;
        case 12:
            mod_icon = "splash_damage.png"
            break;
        case 13:
            mod_icon = "shielding_efficency.png"
            break;
        case 14:
            mod_icon = "safety_net.png"
            break;
        case 15:
            mod_icon = "shielded_boosters.png"
            break;
        case 16:
            mod_icon = "shielded_bay.png"
            break;
        case 17:
            mod_icon = "ecm.png"
            break;
        case 18:
            mod_icon = "placeholder.png"
            break;
        case 19:
            mod_icon = "bribe.png"
            break;
        case 20:
            mod_icon = "fan_favourite.png"
            break;
        case 21:
            mod_icon = "laser_sight.png"
            break;
        case 22:
            mod_icon = "placeholder.png" // Advanced radar
            break;
        case 23:
            mod_icon = "silent_running.png"
            break;
        case 24:
            mod_icon = "last_gasp.png"
            break;
        case 25:
            mod_icon = "mastermine.png"
            break;
        default:
            mod_icon = "placeholder.png";

    }
    return mod_icon
}

function Mod_slots(mod1,mod2,mod3,mod1_name,mod2_name,mod3_name) {
    return (
        <div className="mod_slots_container">
            <div className="mod_slot">
                <img src={"/mod_icons/"+get_mod_icon(mod1)} className="mod_icon" alt={mod1_name} />
            </div>
            <div className="mod_slot">
                <img src={"/mod_icons/"+get_mod_icon(mod2)} className="mod_icon" alt={mod2_name} />
            </div>
            <div className="mod_slot">
                <img src={"/mod_icons/"+get_mod_icon(mod3)} className="mod_icon" alt={mod3_name} />
            </div>
        </div>
    )


}

export default Mod_slots;