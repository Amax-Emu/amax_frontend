import create from "zustand"

interface User {
    token: string
    refresh_token: string
}

interface Store {
    user: User | undefined
    signIn: () => Promise<void>
}

export const useAuthStore = create<Store>((set, get) => ({
    user: undefined,
    signIn: async () => {
        if (get().user !== undefined) {
            // console.log("User is defined")
            return
        } 

        set({
            user: {
                token: localStorage.getItem("token"),
                refresh_token: localStorage.getItem("refresh_token")
            }
        })
    
    }
}))



// await fetch()
// fetch().then(response => {} // rest of the code)
// fetch returns a Promise<T>