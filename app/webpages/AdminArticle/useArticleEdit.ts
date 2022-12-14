import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {IArticleFields} from "@/webpages/AdminArticle/AdminArticle";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {ArticleService} from "@/services/ArticleService";
import {getKeys} from "@/utils/object/getKeys";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useArticleEdit = (setValue: UseFormSetValue<IArticleFields>) => {
    const {push, query} = useRouter();
    const articleId = String(query.id);

    const {isLoading} = useQuery(['article', articleId], () => ArticleService.getById(articleId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных статьи');
        },
        enabled: !!query.id
    });

    const {mutateAsync} = useMutation('update article', (data: IArticleFields) => ArticleService.edit( articleId,data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании статьи');
        },
        onSuccess: ({data}) => {
            toastr.success('Редактирование статьи', 'Статья успешно изменена')
            push('/admin/articles');
        }
    });

    const onSubmit: SubmitHandler<IArticleFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}