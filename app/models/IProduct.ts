import {StaticImageData} from "next/image";

export interface IProductProperty {
    id: number,
    title: string,
    value: any,
    productId: number
}

export interface IProduct {
    id: number,
    description: string
    name: string,
    img: StaticImageData,
    count: number
    price: number,
    newPrice?: number,
    categoryId: number,
    isDiscount?: boolean,
    info?: IProductProperty[]
}