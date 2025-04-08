import React from 'react'
import { Catalog, Slider } from '../../components'
import { useProducts } from '../../hooks/products'

export const Home = () => {
  const {data, isLoading, error} = useProducts();
    
  if(error){
    return <h1>data is not defined</h1>
  }

  return (
    <>
        <Slider/>
        <Catalog isLoading={isLoading} products={data}/>
    </>
  )
}
