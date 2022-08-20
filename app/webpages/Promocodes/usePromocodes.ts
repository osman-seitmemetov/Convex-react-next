import {useQuery} from "react-query";
import {PromocodeService} from "@/services/PromocodeService";

export const usePromocodes = () => {
    const {
        isLoading,
        data: promocodes,
        error,
        status
    } = useQuery('all orders', () => PromocodeService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, promocodes}
}