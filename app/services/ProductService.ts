import {IProduct} from '@/models/IProduct';
import axios from "axios";
import {IProductFields} from "@/webpages/AdminProduct/AdminProduct";
import {axiosClassic} from "../api/interceptots";
import {IArticle} from "@/models/IArticle";
import {IArticleFields} from "@/webpages/AdminArticle/AdminArticle";


export const ProductService = {
    async getAll(term?: string) {
        return await axios.get<IProduct[]>('http://localhost:5000/api/product', {
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
        return await axiosClassic.put<IProductFields>(`http://localhost:5000/api/product/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/product/${id}`);
    },

    async create(data: IProductFields) {
        return await axiosClassic.post<IProduct>(`http://localhost:5000/api/product`, data);
    },
}