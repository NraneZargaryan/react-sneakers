import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
        <img className={styles.img} src="/logo.png" alt="" width={40} height={40}/>
        <b className={styles.b}>REACT SNEAKERS</b>
        <span className={styles.span}>Магазин лучших кроссовок</span>
    </Link>
  )
}
