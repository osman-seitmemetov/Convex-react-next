import {instance} from "../api/interceptots";
import {IPromocode} from "@/models/IPromocode";

export const PromocodeService = {
    async getAll() {
        return await instance.get<IPromocode[]>('/promocode');
    }
}