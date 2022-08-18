import axios from "axios";
import {LoginResponse} from "@/models/response/LoginResponse";
import {AuthService} from "@/services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {ILogin, IRegistration} from "@/types/types";
import {axiosClassic} from "../../api/interceptots";


export const login = createAsyncThunk<LoginResponse, ILogin>('auth/login', async (
    {email, password}, thunkAPI
) => {
    try {
        const response = await AuthService.login(email, password);

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
    // return async (dispatch: AppDispatch) => {
    //     try {
    //         // dispatch(authSlice.actions.loginFetching());
    //         const {data} = await AuthService.login(email, password);
    //         dispatch(authSlice.actions.login(data));
    //         localStorage.setItem('token', data.accessToken);
    //     } catch (e: any) {
    //         // dispatch(authSlice.actions.loginFetchingError(e.message));
    //         console.log(e)
    //     }
    // };
})

export const registration = createAsyncThunk<RegistrationResponse, IRegistration>('auth/registration', async (
    {
        email,
        password,
        gender,
        lastName,
        name,
        phone,
        bornDate
    }, thunkAPI
) => {
    try {
        const response = await AuthService.registration(
            email, password, gender,
            lastName, name, phone, bornDate
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout();
})

export const checkAuth = createAsyncThunk<LoginResponse>('auth/check', async (
    _, thunkAPI
) => {
    try {
        const response = await axiosClassic.get<LoginResponse>(`/user/refresh`);
        localStorage.setItem('token', response.data.accessToken);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

// export const checkAuth = () => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             const response = await axios.get<LoginResponse>(`http://localhost:5000/api/user/refresh`, {withCredentials: true});
//             dispatch(authSlice.actions.checkAuth(response.data));
//             console.log(response.data)
//         } catch (e: any) {
//             console.log(e.response?.data?.message)
//         }
//     }
// }


// export const login = (email: string, password: string) => (dispatch: AppDispatch) => {
//     dispatch(fetchLogin(email, password));
// }