import React from 'react'
import style from "./style.module.css"
import { SearchBar, Card, MyLoader } from '../'
import { useLocation } from 'react-router-dom'
import { useSearchStore } from '../../store/search'

export const Catalog = ({ products = [], isLoading }) => {
  const { searchValue, setSearchValue } = useSearchStore();
  const pathName = useLocation().pathname;

  const isInCatalog = pathName === "/";
  const isInFavorite = pathName === "/favorites";
  const isInOrders = pathName === "/orders";

  const filteredProducts = products.filter((item) =>
    item?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className={style.main}>
      <SearchBar
        text={
          isInCatalog
            ? 'Все кроссовки'
            : isInFavorite
            ? "Мои закладки"
            : isInOrders
            ? "Мои покупки"
            : ""
        }
      />
      <div className={style.container}>
        {isLoading
          ? [...Array(8)].map((_, index) => <MyLoader key={index} />)
          : filteredProducts.map((item) => <Card key={item.id} {...item} />)}
      </div>
    </main>
  );
}
