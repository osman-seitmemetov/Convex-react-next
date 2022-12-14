import {IProduct} from "@/models/IProduct";
import {genderTypes} from "@/models/IUser";

export interface IFAQItem {
    _id: number
    title: string
    text: string
}

export interface ICartItem {
    product: IProduct
    count: number
    sumPrice: number
}

// export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IRegistration {
    name: string,
    password: string,
    lastName: string,
    email: string,
    bornDate: Date,
    gender: genderTypes,
    phone: string,
}

export interface ILogin {
    email: string,
    password: string
}

