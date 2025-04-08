import React from 'react'
import style from "./style.module.css"
import { Title } from '../'
import { SquareX } from 'lucide-react'
import { useBascet } from '../../hooks/bascet'

export const BascetCard = ({img, title, price, id}) => {
  const [loading, setLoading] = React.useState();
  const {removeProduct} = useBascet();

  const handleClose = async () => {
    setLoading(true)
    await removeProduct(id)
    setLoading(false)
  }

  return (
    <div className={style.bascetCard}>
        <img src={img} alt="" className={style.bascetCardImg}/>
        <div>
            <Title 
                size="m" 
                text={title} 
                className={style.title}
            />
            <Title 
                size="m" text={<b>{price} руб.</b>}
                className={style.price}
            />
        </div>
        <SquareX size={32} className={style.remove} onClick={handleClose} disabled={loading}/>
    </div>
  )
}
