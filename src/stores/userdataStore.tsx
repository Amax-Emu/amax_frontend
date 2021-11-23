import create from "zustand"
import {authStore} from "./authStore";
import {date} from "yup";

const { AMAX_API_URL } = process.env;

export interface UserData {
    amax_account: boolean;
    avatarUrl:       string;
    isGameBanned: boolean;
    isDiscordBanned: boolean;
    ban_data: banData | undefined
    amax_player_data: AmaxPlayerData | undefined
}

export interface banData {
    ban_reason: string;
    ban_start: string;
    ban_end: string;
}


export interface AmaxPlayerData {
    stats:            Stats;
    leveling:         Leveling;
    friends:          Friend[];
    friends_purposes: FriendsPurposes;
}

export interface Friend {
    name:     string;
    isOnline: boolean;
    status:   string;
}

export interface FriendsPurposes {
    outcoming: string[];
    incoming:  string[];
}

export interface Leveling {
    level:                number;
    legend:               number;
    fans:                 number;
    fans_levelup_percent: number;
}

export interface Stats {
    playerName:      string;
    statLevel:       number;
    statFansCurrent: number;
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
}

interface Store {
    userData: UserData | undefined
    getData: () => Promise<void>
}



// @ts-ignore
export const [useUserDataStore,UserDataStore] = create<Store>((set, get) => {

    return {

        userData: undefined,
        getData: async () => {
            const auth = authStore.getState()
            if (auth.user === undefined) {
                return
            } else {
                // if (get().userData !== undefined) {
                //     console.log("User is defined")
                //     return
                // } else {
                    console.log("GETTING USER DATA")
                    const resp = await fetch(AMAX_API_URL + "/players/@me", {
                        method: 'GET',

                        headers: {
                            'content-type': 'application/json;charset=UTF-8',
                            'Authorization': `Bearer ${auth.user.token}`
                        },
                    })
                    const temp = await resp.json()
                    console.log("GOT USER DATA")
                    set({
                            userData: temp
                        }
                    )

                    console.log("SET USER DATA")
                // }
            }

        },
}})



// await fetch()
// fetch().then(response => {} // rest of the code)
// fetch returns a Promise<T>