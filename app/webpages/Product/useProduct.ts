import {useQuery} from "react-query";
import {ProductService} from "@/services/ProductService";

export const useProduct = (id: string) => {
    const {
        isLoading,
        data: product,
        error,
        status
    } = useQuery('single product', () => ProductService.getById(id), {
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, product}
}