import React from 'react'
import style from "./style.module.css"
import { MoveLeft } from 'lucide-react'
import { useFavorite } from '../../hooks/favorites'
import { Catalog, Button, Title } from '../../components'
import { Link } from 'react-router-dom'


export const Favorites = () => {
  const {data, error, isLoading} = useFavorite();

  if(error){
    return <h1>data is not defined</h1>
  }

  if(isLoading){
    return <h1>...loading</h1>
  }


  return (
    <div className={style.wrapper}>
      {data.length === 0 ? (
        <div className={style.main}>
          <span className={style.emoji}>😔</span>
          <Title size="m" text={<b>Закладок нет :(</b>} />
          <Title size="s" text={<span className={style.span}>Вы ничего не добавляли в закладки</span>} />
          <Link to={"/"}>
            <Button className={style.button}><MoveLeft /> Вернуться назад</Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className={style.list}>
            <Catalog products={data} isLoading={isLoading}/>
          </div>
        </div>
      )}
    </div>
  );  
}
