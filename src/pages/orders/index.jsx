import React from 'react'
import style from "./style.module.css"
import { Title, Button, Catalog } from '../../components'
import { MoveLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useOrders } from '../../hooks/orders'

export const Orders = () => {
    const { data: orders, ordersError, ordersIsLoading } = useOrders();

    console.log(orders);

    const dataOrders = orders.reduce((acc, item) => {
      acc.push(Object.values(item))
      return acc
    }, [])
    
  if(ordersError){
    return <h1>data is not defined</h1>
  }

  if(ordersIsLoading){
    return <h1>...loading</h1>
  }


  return (
    <div className={style.wrapper}>
      {orders.length === 0 ? (
        <div className={style.main}>
          <span className={style.emoji}>🥺</span>
          <Title size="m" text={<b>У вас нет заказов</b>} />
          <Title size="s" text={<span className={style.span}>Вы нищеброд? <br />Оформите хотя бы один заказ.</span>} />
          <Link to={"/"}>
            <Button className={style.button}><MoveLeft /> Вернуться назад</Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className={style.list}>
            <Catalog products={dataOrders.flat()} />
          </div>
        </div>
      )}
    </div>
  );  
}
