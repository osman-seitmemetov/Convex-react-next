import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {IArticleFields} from "@/webpages/AdminArticle/AdminArticle";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {ArticleService} from "@/services/ArticleService";
import {getKeys} from "@/utils/object/getKeys";

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
            alert(error);
        },
        enabled: !!query.id
    });

    const {mutateAsync} = useMutation('update article', (data: IArticleFields) => ArticleService.edit( articleId,data), {
        onError: (error) => {
            alert(error);
        },
        onSuccess: ({data}) => {
            alert('Статья успешно изменена');
            alert(JSON.stringify(data));
            push('/admin/articles');
        }
    });

    const onSubmit: SubmitHandler<IArticleFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}