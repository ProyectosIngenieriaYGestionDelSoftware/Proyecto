export enum typeBusiness {
    PERSONAL_CARE = "Personal Care",
    RESTAURANT = "Restaurant",
    RENTING_CAR = "Renting Car",
    HEALTH_CARE = "Medical Appointments"
}

export interface userRequest {
    message:string,
    username:string,
    token:string
}