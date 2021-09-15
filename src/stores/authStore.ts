import create from "zustand"

interface User {
    name: string
    token: string
    // Todo: rest
}

interface Store {
    user: User | undefined
    signIn: () => Promise<void>
}

export const useAuthStore = create<Store>((set, get) => ({
    user: undefined,
    signIn: async () => {
        if (get().user !== undefined) {
            return
        }

        // Open webview
        
        // Todo: Change
        set({
            user: {
                name: "AiBot",
                token: ""
            }
        })
    }
}))

// await fetch()
// fetch().then(response => {} // rest of the code)
// fetch returns a Promise<T>