import {genderTypes, IUser} from "@/models/IUser";
import {instance} from "../api/interceptots";
import axios from "axios";

export interface IEditData {
    name?: string,
    lastName?: string,
    email?: string,
    isActivated?: boolean,
    bornDate?: string,
    gender?: genderTypes,
    phone?: string,
    password?: string
}

export const UserService = {
    async getAll() {
        return await instance.get<IUser[]>('http://localhost:5000/api/user/users', {withCredentials: true});
    },

    async getById(id: string) {
        return await instance.get<IUser>(`http://localhost:5000/api/user/${id}`, {withCredentials: true});
    },

    async editProfile(editData: IEditData) {
        return await instance.put<IUser>(`/user/edit`, editData);
    }
}