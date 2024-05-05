export enum typeBusiness {
    PERSONAL_CARE = "Personal Care",
    RESTAURANT = "Restaurant",
    RENTING_CAR = "Renting Car",
    HEALTH_CARE = "Medical Appointments"
}

export type Message = {
    sender: string,
    message: string,
    readed: boolean,
    timestamp: Date
}

export type SocketMessage = {
    
    sender : string,
    receiver? : string,
    message? : string,
    timestamp? : Date,
    readed? : boolean,
    chatNumber? : number
    action : 'received' | 'readed' | 'connected'
}

export interface UserRequest {
    message:string,
    user:User,
    token:string
}

export interface User {
    _id:string
    name:string,
    email:string,
    phone_number:string,
    is_business:boolean,
    type:typeBusiness,
    services:Service[]
}

export interface Service {
    name:string,
    description:string,
    duration:number,
    price:number
}