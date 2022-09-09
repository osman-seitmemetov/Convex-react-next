import axios from "axios";
import {IProductFields} from "@/webpages/AdminProduct/AdminProduct";
import {axiosClassic} from "../api/interceptots";
import {IArticle} from "@/models/IArticle";
import {ICategory} from "@/models/ICategory";


export const CategoryService = {
    async getAll(term?: string) {
        return await axios.get<ICategory[]>('http://localhost:5000/api/category', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axios.get<IProductFields>(`http://localhost:5000/api/product/${id}`);
    },

    async edit(id: string, data: IProductFields) {
        return await axiosClassic.put<IArticle>(`http://localhost:5000/api/product/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/product/${id}`);
    }
}