// export interface IUser {
//     email: string,
//     isActivated: boolean,
//     id: number
// }

export enum genderTypes {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface IUser {
    name: string,
    lastName: string,
    email: string,
    isActivated: boolean,
    id: number,
    bornDate: Date,
    gender: genderTypes,
    phone: string,
    role?: string
}