import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/models/IUser";
import {checkAuth, editProfile, login, logout, registration} from "@/store/auth/AuthActionCreators";


interface authState {
    user: IUser | null,
    isLoading: boolean
}

const initialState: authState = {
    user: null,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, action: PayloadAction<LoginResponse>) {
        //     // state.isAuth = true;
        //     state.user = action.payload.user;
        //
        //     console.log(state.user);
        // },
        // registration() {},
        // logout() {},
        // checkAuth(state, action: PayloadAction<LoginResponse>) {
        //     localStorage.setItem('token', action.payload.accessToken);
        //     // state.isAuth = true;
        //     state.user = action.payload.user;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, state => {
            state.isLoading = true;
        }).addCase(registration.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        }).addCase(registration.rejected, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(login.pending, state => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        }).addCase(login.rejected, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null
        }).addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(checkAuth.rejected, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(editProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload;
        })
    }
})

export default authSlice.reducer;