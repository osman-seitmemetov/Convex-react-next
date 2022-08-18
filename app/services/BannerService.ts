import axios from "axios";
import {IBanner} from "@/models/IBanner";

export const BannerService = {
    async getAll() {
        return await axios.get<IBanner[]>('http://localhost:5000/api/banner');
    },

    async getById(id: string) {
        console.log(id)
        return await axios.get<IBanner>(`http://localhost:5000/api/banner/${id}`);
    }
}