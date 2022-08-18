import $api from "../http";
import axios, {AxiosResponse} from "axios";
import {LoginResponse} from "@/models/response/LoginResponse";
import {IUser} from "@/models/IUser";

export const UserService = {
    async getAll() {
        return await axios.get<IUser[]>('http://localhost:5000/api/user/users');
    },

    async getById(id: string) {
        console.log(id)
        return await axios.get<IUser>(`http://localhost:5000/api/user/${id}`);
    }
}