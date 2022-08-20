import {axiosClassic} from "../api/interceptots";
import {IOrder} from "@/models/IOrder";

export const OrderService = {
    async getAll() {
        return await axiosClassic.get<IOrder[]>('/order');
    },

    async getById(id: string) {
        return await axiosClassic.get<IOrder>(`/order/${id}`);
    }
}