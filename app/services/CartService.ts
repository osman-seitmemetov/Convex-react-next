import {IUser} from "@/models/IUser";
import {instance} from "../api/interceptots";
import axios from "axios";

export const UserService = {
    async getAll() {
        // return await instance.get<IUser[]>('/user/users');
        return await axios.get<IUser[]>('http://localhost:5000/api/user/users', {withCredentials: true});
    },

    async getById(id: string) {
        // return await instance.get<IUser>(`/user/${id}`);
        return await axios.get<IUser>(`http://localhost:5000/api/user/${id}`, {withCredentials: true});
    }
}