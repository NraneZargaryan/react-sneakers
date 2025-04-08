import React from 'react'
import style from "./style.module.css"
import { Title, Search } from '../'
import { useSearchStore } from '../../store/search'
import { useLocation } from 'react-router-dom'


export const SearchBar = ({text}) => {
    const {searchValue, setSearchValue} = useSearchStore();
    const pathName = useLocation().pathname;
    const isInFavorite = pathName === "/favorites";
    const isInOrders = pathName === "/orders";
    

  return (
    <div className={style.upperContainer}>
          <Title
            size="l" 
            text={<b>{text}</b>}
          />
          {!isInFavorite && !isInOrders &&
            <Search value={searchValue} onChange={setSearchValue}/>
        }
    </div>
  )
}
