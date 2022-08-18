import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth/AuthSlice";
import orderReducer from "./orders/OrderReducer";
import notificationsReducer from "./notifications/NotificationsSlice";
import promocodesReducer from "./promocodes/PromocodesSlice";
import articlesReducer from "./articles/ArticlesSlice";
import bannersReducer from "./banners/BannersSlice";
import FAQReducer from "./FAQ/FAQSlice";


const rootReducer = combineReducers({
    authReducer,
    orderReducer,
    notificationsReducer,
    promocodesReducer,
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