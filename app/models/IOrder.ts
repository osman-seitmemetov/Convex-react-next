import {IProduct} from "../types/types";

export enum statusTypes {
    NOT_PAID = "NOT_PAID",
    PAID = "PAID"
}

export interface IOrder {
    id: number,
    status: statusTypes,
    deliveryAddress: string,
    requestDate: string,
    deliveryDate: string,
    orderSum: number,
    deliverySum: number,
    globalSum: number,
    // type: typesEnum,
    products: IProduct[]
}