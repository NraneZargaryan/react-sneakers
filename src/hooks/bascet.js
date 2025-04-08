import useSWR from "swr"
import { fetcher } from "../helpers/fetcher";
import axios from "axios";
import { ApiRoutes } from "../services/constants";
import { axiosInstance } from "../services/instance";


export const useBascet = () => {
    const { data: products, error, isLoading, mutate } = 
    useSWR(ApiRoutes.CART, fetcher, {
        revalidateOnFocus: false
    });

    const data = products?.length > 0 ? products : [];

    if(error || !data){
        return {
            data: [],
            isSomeProduct: () => {},
            addProduct: () => {},
            removeProduct: () => {},
            clearBascet: () => {},
            totalPrice: 0,
            error,
            isLoading,
        }
    }

    const isSomeProduct = (productId) => {
        return data.some((item) => item.productId === productId)
    }

    const addProduct = async (product) => {
        if(isSomeProduct(product.productId)) return;
        try {
            await axiosInstance.post(ApiRoutes.CART, product)
            mutate([...data, product])
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const removeProduct = async (id) => {
        try {
            await axiosInstance.delete(`${ApiRoutes.CART}/${id}`)
            mutate(data.filter((item) => item.id != id))
        } catch (error) {
            console.log(error);
            
        }
    }

    const clearBascet = async () => {
        if(data.length === 0) return;
        data.forEach(async (item) => {
            await removeProduct(item.id)
        });
    };
      

    const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

    return {
        data,
        isSomeProduct,
        addProduct,
        removeProduct,
        clearBascet,
        totalPrice,
        error, 
        isLoading
    }
}