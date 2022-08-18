import {IOrder, statusTypes} from "../../models/IOrder";
import {createSlice} from "@reduxjs/toolkit";


interface orderState {
    orders: IOrder[]
}

const initialState: orderState = {
    orders: [
        {
            id: 1012,
            status: statusTypes.NOT_PAID,
            deliveryAddress: "New York",
            requestDate: '12.05.2020 10:19',
            deliveryDate: "-",
            orderSum: 11000,
            deliverySum: 1500,
            globalSum: 12500,
            products: []
        },
        {
            id: 1013,
            status: statusTypes.PAID,
            deliveryAddress: "Los Angeles",
            requestDate: '12.05.2020 10:19',
            deliveryDate: "-",
            orderSum: 11000,
            deliverySum: 1500,
            globalSum: 12500,
            products: []
        },
        {
            id: 1014,
            status: statusTypes.NOT_PAID,
            deliveryAddress: "New York",
            requestDate: '12.05.2020 10:19',
            deliveryDate: "-",
            orderSum: 11000,
            deliverySum: 1500,
            globalSum: 12500,
            products: []
        }
    ]
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordersFetching() {

        }
    }
})

export default orderSlice.reducer;