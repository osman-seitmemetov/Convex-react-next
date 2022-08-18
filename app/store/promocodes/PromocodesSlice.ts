import {createSlice} from "@reduxjs/toolkit";
import {IPromocode} from "../../models/IPromocode";

interface promocodesState {
    promocodes: IPromocode[]
}

const initialState: promocodesState = {
    promocodes: [
        {
            id: 1,
            title: "Бесплатная доставка от 20 000 тг.",
            categoryId: 1,
            value: "8080",
            read: false
        },
        {
            id: 2,
            title: "Бесплатная доставка от 20 000 тг.",
            categoryId: 4,
            value: "8080",
            read: false
        },
        {
            id: 3,
            title: "Бесплатная доставка от 20 000 тг.",
            categoryId: 2,
            value: "8080",
            read: true
        },
        {
            id: 4,
            title: "Бесплатная доставка от 20 000 тг.",
            categoryId: 8,
            value: "8080",
            read: true
        }
    ]
}

export const promocodesSlice = createSlice({
    name: 'promocodes',
    initialState,
    reducers: {
        promocodesFetching() {

        }
    }
})

export default promocodesSlice.reducer;