import { defineStore } from "pinia";

interface User {
    name: string | null;
    id: string | null;
};

export const useUserStore = defineStore('user', {
    state: (): User => ({
        name: null,
        id: null
    }),
    actions: {
        setUser(user: User){
            this.name = user.name;
            this.id = user.id;
        }
    }
});