import React from 'react'
import style from './style.module.css'

export const Container = ({children, className}) => {
  return (
    <div className={style.container + " " + className}>
        {children}
    </div>
  )
}
