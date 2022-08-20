import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/AuthSlice";
import notificationsReducer from "./notifications/NotificationsSlice";
import articlesReducer from "./articles/ArticlesSlice";
import bannersReducer from "./banners/BannersSlice";
import FAQReducer from "./FAQ/FAQSlice";


const rootReducer = combineReducers({
    authReducer,
    notificationsReducer,
    articlesReducer,
    bannersReducer,
    FAQReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>;
export type TypeRootState = ReturnType<typeof store.getState>;