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