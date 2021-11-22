import './mod_slots.css'
// @ts-ignore
import ModIcons from '../mod_icons/*.png'
import * as React from "react"

function get_mod_icon(mod_id) {
    let mod_icon = 'iron_fist';
    switch (mod_id) {
        case 1:
            mod_icon = "iron_fist"
            break;
        case 2:
            mod_icon = "jump_the_gun"
            break;
        case 3:
            mod_icon = "front_runner"
            break;
        case 4:
            mod_icon = "drifter"
            break;
        case 5:
            mod_icon = "titanium_armor"
            break;
        case 6:
            mod_icon = "showy_flourish"
            break;
        case 7:
            mod_icon = "stable_frame"
            break;
        case 8:
            mod_icon = "battering_ram"
            break;
        case 9:
            mod_icon = "placeholder" //decoy drop
            break;
        case 10:
            mod_icon = "placeholder" //road sweep
            break;
        case 11:
            mod_icon = "scrambler"
            break;
        case 12:
            mod_icon = "splash_damage"
            break;
        case 13:
            mod_icon = "shielding_efficency"
            break;
        case 14:
            mod_icon = "safety_net"
            break;
        case 15:
            mod_icon = "shielded_boosters"
            break;
        case 16:
            mod_icon = "shielded_bay"
            break;
        case 17:
            mod_icon = "ecm"
            break;
        case 18:
            mod_icon = "placeholder" // vampiric
            break;
        case 19:
            mod_icon = "bribe"
            break;
        case 20:
            mod_icon = "fan_favourite"
            break;
        case 21:
            mod_icon = "laser_sight"
            break;
        case 22:
            mod_icon = "placeholder" // Advanced radar
            break;
        case 23:
            mod_icon = "silent_running"
            break;
        case 24:
            mod_icon = "last_gasp"
            break;
        case 25:
            mod_icon = "mastermine"
            break;
        default:
            mod_icon = "placeholder";

    }
    return mod_icon
}

export default function Mod_slots({mod1,mod2,mod3,mod1_name,mod2_name,mod3_name}:{mod1:number, mod2:number, mod3:number, mod1_name:string, mod2_name:string, mod3_name:string}) {
    return (
        <div className="mod_slots_container">
            <div className="mod_slot">
                <img src={ModIcons[get_mod_icon(mod1)]} className="mod_icon2" alt={mod1_name} />
            </div>
            <div className="mod_slot">
                <img src={ModIcons[get_mod_icon(mod2)]} className="mod_icon2" alt={mod2_name} />
            </div>
            <div className="mod_slot">
                <img src={ModIcons[get_mod_icon(mod3)]} className="mod_icon2" alt={mod3_name} />
            </div>
        </div>
    )


}
