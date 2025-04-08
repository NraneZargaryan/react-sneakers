import React from 'react'
import style from "./style.module.css"
import { BascetCard, Button, Title } from '../'
import { MoveLeft, SquareX } from 'lucide-react'
import { useBascetStore } from '../../store/bascet'
import { useBascet } from '../../hooks/bascet'
import { useOrders } from '../../hooks/orders'
import { Link } from 'react-router-dom'

export const Bascet = () => {
  const { isOpenBascet, setIsOpenBascet } = useBascetStore();
  const { data: basketItems, totalPrice } = useBascet();
  const { data: orders, addOrders } = useOrders();
  const [loading, setLoading] = React.useState(false);
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  React.useEffect(() => {
    if (!isOpenBascet) {
      setOrderPlaced(false);
    }
  }, [isOpenBascet]);

  const addToOrders = async () => {
    setLoading(true)
    await addOrders(basketItems)
    setLoading(false)
  }
  

  return (
    <>
      {isOpenBascet &&
        <div className={style.overlay} onClick={() => setIsOpenBascet(false)}>
          <div className={style.bascet} onClick={(e) => e.stopPropagation()}>
            <div className={style.upperContainer}>
              <Title size="l" text="Корзина" className={style.bascetTitle} />
              <SquareX size={32} className={style.exit} onClick={() => setIsOpenBascet(false)} />
            </div>

            {orderPlaced && (
              <div className={style.orderSuccess}>
                <img src="ordered.png"  className={style.img}/>
                <Title size="m" text="Заказ оформлен!" style={{ color: "#9DD458" }}/>
                <Title
                  size="s"
                  text={`Ваш заказ #${orders.length} скоро будет передан курьерской доставке`}
                />
                <Link to={"/"}>
                  <Button className={style.button} onClick={() => setIsOpenBascet(false)}>
                    <MoveLeft /> Вернуться назад
                  </Button>
                </Link>
              </div>
            )}

            <div className={style.container}>
              {basketItems.length === 0 && !orderPlaced ? (
                <div className={style.emptyBascet}>
                  <img src="empty.png" className={style.img}/>
                  <Title size="m" text={<b>Корзина пустая</b>} className={style.text} />
                  <Title
                    size="s"
                    text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                  />
                  <Link to={"/"}>
                    <Button className={style.button} onClick={() => setIsOpenBascet(false)}>
                      <MoveLeft /> Вернуться назад
                    </Button>
                  </Link>
                </div>
              ) : (
                basketItems.map((item) => (
                  <li key={item.id}>
                    <BascetCard {...item} />
                  </li>
                ))
              )}
            </div>

            {basketItems.length > 0 && !orderPlaced && (
              <>
                <div className={style.cont}>
                  <Title size="m" text="Итого: " />
                  <div className={style.dots}></div>
                  <Title size="m" text={<b>{totalPrice} руб.</b>} />
                </div>
                <div className={style.cont}>
                  <Title size="m" text="Налог 5%: " />
                  <div className={style.dots}></div>
                  <Title size="m" text={<b>{(totalPrice * 5 / 100).toFixed(2)} руб.</b>} />
                </div>

                <Button
                  className={style.bascetButton}
                  onClick={addToOrders}
                  disabled={loading}
                >
                  {orderPlaced ? "Заказ отправлен" : "Оформить заказ"}
                </Button>
              </>
            )}
          </div>
        </div>
      }
    </>
  );
};
