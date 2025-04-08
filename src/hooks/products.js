import useSWR from "swr"
import { fetcher } from "../helpers/fetcher";
import axios from "axios";
import { ApiRoutes } from "../services/constants";


export const useProducts = () => {
    const { data: products, error, isLoading } = 
    useSWR(ApiRoutes.PRODUCTS, fetcher, {
        revalidateOnFocus: false
    });

    const data = products?.length > 0 ? products : [];

    if(error || !data){
        return {
            data: [],
            error,
            isLoading,
        }
    }

    return {
        data,
        error, 
        isLoading
    }
}