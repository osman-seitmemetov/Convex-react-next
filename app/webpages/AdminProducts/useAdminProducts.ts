import {useMutation, useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";
import {ArticleService} from "@/services/ArticleService";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ProductService} from "@/services/ProductService";
import {useDebounce} from "@/hooks/useDebounce";

export const useAdminProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all products', debouncedSearch], () => ProductService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении товаров')
        },
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin delete product',
        (productId: string) => ProductService.delete(productId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении товара')
            },
            onSuccess() {
                toastr.success('Удаление товара', 'Товар успешно удален')
                queryData.refetch();
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
            deleteAsync, ...queryData, handleSearch, searchTerm
    }),[queryData, deleteAsync, searchTerm]);
}