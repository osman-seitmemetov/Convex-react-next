import {useMutation, useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";
import {ArticleService} from "@/services/ArticleService";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {IArticle} from "@/models/IArticle";

export const useArticles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all articles', debouncedSearch], () => ArticleService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при загрузке статей');
        },
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin delete article',
        (articleId: string) => ArticleService.delete(articleId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении статьи');
            },
            onSuccess() {
                toastr.success('Удаление статьи', 'Статья успешно удалена');
                queryData.refetch();
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
            deleteAsync, handleSearch, searchTerm, ...queryData
    }),[deleteAsync, searchTerm, queryData]);
}