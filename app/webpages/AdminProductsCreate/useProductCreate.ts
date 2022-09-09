import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {IProductFields} from "@/webpages/AdminProduct/AdminProduct";
import {ProductService} from "@/services/ProductService";


export const useProductCreate = () => {
    const {push} = useRouter();

    const { mutateAsync } = useMutation(
        'create product',
        (data: IProductFields) => ProductService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании товара');
            },
            onSuccess() {
                toastr.success('Создание товара', 'Товар успешно создан');
                push('/admin/products');
            },
        }
    )

    const onSubmit: SubmitHandler<IProductFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit};
}