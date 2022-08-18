import {createSlice} from "@reduxjs/toolkit";
import {IArticle} from "../../models/IArticle";
import NewsImg from "../../assets/img/news.jpg";

interface articlesState {
    articles: IArticle[]
}

const initialState: articlesState = {
    articles: [
        {
            id: 1,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        },
        {
            id: 2,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        },
        {
            id: 3,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        },
        {
            id: 4,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        },
        {
            id: 5,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        },
        {
            id: 6,
            title: 'Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.',
            text: 'dffd',
            bannerImg: '',
            previewImg: NewsImg,
            date: '19.04.2020 18:37',
        }
    ]
}

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        promocodesFetching() {

        }
    }
})

export default articlesSlice.reducer;