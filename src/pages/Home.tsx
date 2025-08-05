import { useState, useEffect } from "react";
import Categories from "../components/categories/categories";
import PizzaBlock from "../components/pizza/pizzaBlock";
import Skeleton from "../components/pizza/skeleton";
import Sort from "../components/sort/sort";
import type { IPizza } from "../interfaces";





const Home=()=>{

    const [items,setItems]=useState<IPizza[]>([]);
  const [isLoading,SetIsLoading]=useState<boolean>(true)

  useEffect(()=>{
    fetch('https://6892272c447ff4f11fbf60cb.mockapi.io/items')
  .then((res)=>{
    return res.json();
  })
  .then((arr)=>{
    setItems(arr);
    SetIsLoading(false)
  })
  },[items])


    return(
        <>
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
            ? [...new Array(6)].map((_,index)=><Skeleton key={index}/>)
            : items.map((item)=><PizzaBlock key={item.id} {...item}/>)
            }
                 
          </div>
        </div>
        </>
    )
}

export default Home