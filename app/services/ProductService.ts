import {IProduct} from '@/models/IProduct';
import axios from "axios";


export const ProductService = {
    async getAll() {
        return await axios.get<IProduct[]>('http://localhost:5000/api/product');
    },

    async getById(id: string) {
        return await axios.get<IProduct>(`http://localhost:5000/api/product/${id}`);
    }
}