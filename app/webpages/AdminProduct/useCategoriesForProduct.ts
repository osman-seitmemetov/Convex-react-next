import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {IOption} from "@/models/IOption";

export const useCategoriesForProduct = () => {
    const queryData = useQuery('admin categories product', () => CategoryService.getAll(), {
        select: ({data}) =>
            data.map(
                (category): IOption => ({
                    label: category.name,
                    value: String(category.id)
                })
            ),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке категорий');
        }
    });

    return queryData;
}