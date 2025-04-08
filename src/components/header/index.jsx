import { CircleUserRound, Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {Logo, Container} from '../'
import style from './style.module.css'
import { useBascetStore } from '../../store/bascet'
import { useBascet } from '../../hooks/bascet'

export const Header = () => {
    const {totalPrice} = useBascet();
    const setIsOpenBascet = useBascetStore((state) => state.setIsOpenBascet)

  return (  
    <header className={style.header}>
        <Container className={style.container}>
        <Logo/>
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.item}>
                    <button href="" className={style.link} onClick={() => setIsOpenBascet(true)}><ShoppingCart />{totalPrice} руб.</button>
                </li>
                <li className={style.item}>
                    <Link to="/favorites" className={style.link}><Heart />Закладки</Link>
                </li>
                <li className={style.item}>
                    <Link to="/orders" className={style.link}><CircleUserRound />Профиль</Link>
                </li>
            </ul>
        </nav>
        </Container>
    </header>
  )
}
