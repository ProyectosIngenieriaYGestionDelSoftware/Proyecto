export enum TypeBusiness {
    PERSONAL_CARE = "Personal Care",
    RESTAURANT = "Restaurant",
    RENTING_CAR = "Renting Car",
    HEALTH_CARE = "Medical Appointments"
}

export interface UserRequest {
    message:string,
    user:User,
    token:string
}

export interface User {
    
}