import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/utils/object/getKeys";
import {IProductFields} from "@/webpages/AdminProduct/AdminProduct";
import {ProductService} from "@/services/ProductService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";


export const useProductEdit = (setValue: UseFormSetValue<IProductFields>) => {
    const {push, query} = useRouter();
    const productId = String(query.id);

    const queryData = useQuery(['admin product', productId], () => ProductService.getById(productId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных товара');
        },
        enabled: !!query.id
    });

    const {mutateAsync} = useMutation('admin update product', (data: IProductFields) => ProductService.edit(productId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании статьи');
        },
        onSuccess: ({data}) => {
            toastr.success('Редактирование статьи', 'Статья успешно изменена')
            push('/admin/products');
        }
    });

    const onSubmit: SubmitHandler<IProductFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, ...queryData};
}