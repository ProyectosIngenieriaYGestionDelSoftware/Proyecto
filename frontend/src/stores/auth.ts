import { defineStore} from "pinia";
import router from '../router'
import { typeBusiness } from "@/helper";

export const useAuthStore = defineStore('user',{
    state:() => ({
        //control if localstorage is null
        user: JSON.parse(localStorage.getItem('user')!)
    }),

    actions: {
        async register(username:string,password:string,email:string,phone_number:string,is_business:boolean,type:typeBusiness){
            const requestData = {
                username: username,
                password: password,
                email: email,
                is_business:is_business,
                phone_number:phone_number,
                type:!type?"undefined":type.toString()
              };
          
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestData)
            };
              
            try {
              const response = await fetch('http://localhost:3000/api/register', requestOptions);
      
              if (response.status === 200) {
                const userData = await response.json();
                this.user = userData;
                localStorage.setItem('user', JSON.stringify(this.user));
              }else{
                localStorage.removeItem('user');
              }

              return response.status;

            } catch (error) {
                alert('There was a problem with the network request: ' + error);
            }
        },

        async logout(token:string){
            
        
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','authorization':token },
          };

            const req = await fetch('http://localhost:3000/api/logout',requestOptions);

            console.log(req);
            console.log(await req.json());

            if()
            
            this.user = null;

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