import { defineStore} from "pinia";
import router from '../router'

export const useAuthStore = defineStore('user',{
    state:() => ({
        //control if localstorage is null
        user: JSON.parse(localStorage.getItem('user')!)
    }),

    actions: {
        async register(username:string,password:string,email:string,is_business:boolean){
            const requestData = {
                username: username,
                password: password,
                email: email,
                is_business:is_business
              };
          
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
              };
              const user = await fetch('http://localhost:3000/api/register', requestOptions);

              //add control error
              //alert('There was a problem with the network request:', error.message);


              const userJSON = user.json();
              
              this.user = userJSON;
              localStorage.setItem('user', JSON.stringify(user));
              router.push("/");

        },

        async logout(){
            this.user = null;

            const req = await fetch('http://localhost:3000/api/logout');

            localStorage.removeItem('user');
            router.push("/");
        },

        async login(username:string,password:string){
            const requestData = {
                username: username,
                password: password,
              };
          
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
              };
              const user = await fetch('http://localhost:3000/api/login', requestOptions);

              //add control error
              //alert('There was a problem with the network request:', error.message);


              const userJSON = user.json();
              
              this.user = userJSON;
              localStorage.setItem('user', JSON.stringify(user));
              router.push("/");
        }
    }
})