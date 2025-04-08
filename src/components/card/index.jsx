import { Heart, Plus, SquareCheck } from 'lucide-react'
import React from 'react'
import { Title } from '../'
import style from "./style.module.css"
import { useBascet } from '../../hooks/bascet'
import { useFavorite } from '../../hooks/favorites'
import { useLocation } from 'react-router'


export const Card = ({img, price, title, id}) => {
    const [loading, setLoading] = React.useState(false);
    const {addProduct, isSomeProduct} = useBascet();
    const { addFavorite, removeFavorite, isSomeFavorite} = useFavorite();
    const pathName = useLocation().pathname;
    const isAddFavorite = isSomeFavorite(id) || pathName === "/favorites";
    const isInOrders = pathName === "/orders";

    const addToCart = async () => {
        setLoading(true)
        await addProduct({img, price, title, productId: id})
        setLoading(false);
    }

    const addToFavorite = async () => {
        setLoading(true)
        if(isAddFavorite){
            removeFavorite(id)
            return
        }
        await addFavorite({img, price, title, productId: id})
        setLoading(false);
    };


    const isFavoriteColor = isAddFavorite ? "#FF8585" : "grey";
    

  return (
    <div className={style.item}>
        {!isInOrders &&
        <button className={style.favorite} onClick={addToFavorite} disabled={loading}>
            <Heart color={isFavoriteColor} fill={isFavoriteColor} />
        </button>}
        <img src={img} alt="" />
        <Title size="m" text={title}/>
        <div className={style.priceContainer}>
            <div className={style.price}>
                <Title 
                    size="s" 
                    text="Цена:"
                    className={style.titlePrice}
                />
                <Title 
                    size="m" text={<b>{price} руб.</b>}
                    className={style.titleAmount}
                />
            </div>
            <div className={style.addToCart}>
                {!isInOrders &&
                <button onClick={addToCart} disabled={loading}>
                    {
                        isSomeProduct(id) ? <SquareCheck color="#3CC755" /> : <Plus color="grey" fill="grey"/>
                    }
                </button>}
            </div>

        </div>
    </div>
  )
}
