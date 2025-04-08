import React from 'react'

import style from "./style.module.css"

export const Button = ({className, children, onClick}) => {
  return (
    <button className={style.button + " " + className} onClick={onClick}>{children}</button>
  )
}
