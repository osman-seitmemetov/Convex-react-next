import {IArticle} from "@/models/IArticle";
import {axiosClassic} from "../api/interceptots";
import {IArticleFields} from "@/webpages/AdminArticle/AdminArticle";

export const ArticleService = {
    async getAll(searchTerm?: string) {
        return await axiosClassic.get<IArticle[]>('http://localhost:5000/api/article', {
            params: searchTerm
                ? {
                    term: searchTerm,
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axiosClassic.get<IArticleFields>(`http://localhost:5000/api/article/${id}`);
    },

    async getByIdPublic(id: string) {
        return await axiosClassic.get<IArticle>(`http://localhost:5000/api/article/${id}`);
    },

    async edit(id: string, data: IArticleFields) {
        return await axiosClassic.put<IArticle>(`http://localhost:5000/api/article/${id}`, data);
    },

    async create(data: IArticleFields) {
        return await axiosClassic.post<IArticle>(`http://localhost:5000/api/article`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/article/${id}`);
    }
}