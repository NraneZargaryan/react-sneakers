import useSWR from "swr"
import { fetcher } from "../helpers/fetcher";
import axios from "axios";
import { ApiRoutes } from "../services/constants";
import { axiosInstance } from "../services/instance";


export const useFavorite = () => {
    const { data: products, error, isLoading, mutate } = 
    useSWR(ApiRoutes.FAVORITES, fetcher, {
        revalidateOnFocus: false
    });

    const data = products?.length > 0 ? products : [];

    if(error || !data){
        return {
            data: [],
            isSomeFavorite: () => {},
            addFavorite: () => {},
            removeFavorite: () => {},
            error,
            isLoading,
        }
    }

    const isSomeFavorite = (productId) => {
        return data.some((item) => item.productId === productId)
    }

    const addFavorite = async (product) => {
        if(isSomeFavorite(product.productId)) return;
        try {
            await axiosInstance.post(ApiRoutes.FAVORITES, product)
            mutate([...data, product])
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const removeFavorite = async (id) => {
        try {
            await axiosInstance.delete(`${ApiRoutes.FAVORITES}/${id}`)
            mutate(data.filter((item) => item.id != id))
        } catch (error) {
            console.log(error);
            
        }
    }


    return {
        data,
        isSomeFavorite,
        addFavorite,
        removeFavorite,
        error, 
        isLoading
    }
}