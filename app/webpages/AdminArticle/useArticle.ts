import {useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";
import {ArticleService} from "@/services/ArticleService";

export const useArticles = () => {
    const {
        isLoading,
        data: articles,
        error,
        status
    } = useQuery('all products', () => ArticleService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, articles}
}