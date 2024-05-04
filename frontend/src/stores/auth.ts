import { defineStore} from "pinia";
import router from '../router'
import { typeBusiness, UserRequest } from "@/helper";

export const useAuthStore = defineStore('user',{
    state: () => ({
        user: null as UserRequest | null
    }),

    actions: {

      async initUser() {

        this.user = JSON.parse(localStorage.getItem('user')!);

        let requestOptions;
      
        if(this.user!=null){
          requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','authorization':this.user.token },
          };
        }else{
          return;
        }

      
        fetch('http://localhost:3000/api/checkToken',requestOptions)
          .then(response => {
            
            if(!response.ok) { 
              this.user = null;
              localStorage.removeItem('user');
              console.log("Invalid token");
            }
          })
          
          .catch(error =>  {
            console.log('There was a problem with the network request: ' + error);
            this.user = null;
            localStorage.removeItem('user');
        });
    
        
          
      },
        

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

          try{
            const req = await fetch('http://localhost:3000/api/logout',requestOptions);

            const response = await req.json();

          
            this.user = null;
            localStorage.removeItem('user');  
            return response;
          }catch(error){
            this.user = null;
            localStorage.removeItem('user');
            console.log('There was a problem with the network request: ' + error);
          }
            
        },

        async login(email:string,password:string){
            const requestData = {
                email: email,
                password: password,
              };

              
          
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
              };

              try {
                const response = await fetch('http://localhost:3000/api/login', requestOptions);
        
                if (response.status === 200) {
                  const userData = await response.json();
                  this.user = userData;
                  localStorage.setItem('user', JSON.stringify(this.user));
                }else{
                  localStorage.removeItem('user');
                }
  
                return response.status;
  
              } catch (error) {
                  console.log('There was a problem with the network request: ' + error);
              }
        }
    }
})

