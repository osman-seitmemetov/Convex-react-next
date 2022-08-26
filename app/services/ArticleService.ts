import {IArticle} from "@/models/IArticle";
import {axiosClassic} from "../api/interceptots";
import {IArticleFields} from "@/webpages/AdminArticle/AdminArticle";

export const ArticleService = {
    async getAll() {
        return await axiosClassic.get<IArticle[]>('http://localhost:5000/api/article', {});
    },

    async getById(id: string) {
        return await axiosClassic.get<IArticleFields>(`http://localhost:5000/api/article/${id}`);
    },

    async getByIdPublic(id: string) {
        return await axiosClassic.get<IArticle>(`http://localhost:5000/api/article/${id}`);
    },

    async edit(id: string, data: IArticleFields) {
        return await axiosClassic.put<IArticle>(`http://localhost:5000/api/article/${id}`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
}