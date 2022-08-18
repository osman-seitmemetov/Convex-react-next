import {useQuery} from "react-query";
import {UserService} from "@/services/UserService";

export const useUsers = () => {
    const {
        isLoading,
        data: users,
        error,
        status
    } = useQuery('all products', () => UserService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, users}
}