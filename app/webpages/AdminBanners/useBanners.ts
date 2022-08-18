import {useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";

export const useBanners = () => {
    const {
        isLoading,
        data: banners,
        error,
        status
    } = useQuery('all products', () => BannerService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, banners}
}