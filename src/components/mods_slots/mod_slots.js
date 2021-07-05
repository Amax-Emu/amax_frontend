import './mod_slots.css'


function Mod_slots(mod1,mod2,mod3) {
    return (
        <div className="mod_slots_container">
            <div className="mod_slot">
                <img src="/mod_icons/drifter.png" className="mod_icon" alt="logo" />
            </div>
            <div className="mod_slot">
                <img src="/mod_icons/iron_fist.png" className="mod_icon" alt="logo" />
            </div>
            <div className="mod_slot">
                <img src="/mod_icons/stable_frame.png" className="mod_icon" alt="logo" />
            </div>
        </div>
    )


}

export default Mod_slots;