import {instance} from "../api/interceptots";
import {IOrder} from "@/models/IOrder";

export const OrderService = {
    async getAll() {
        return await instance.get<IOrder[]>('/order');
    },

    async getById(id: string) {
        return await instance.get<IOrder>(`/order/${id}`);
    }
}