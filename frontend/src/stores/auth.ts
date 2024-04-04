import { defineStore} from "pinia";

export const useAuthStore = defineStore('user',{
    state:() => ({
        //user: JSON.parse(localStorage.getItem('user'))
    })
})