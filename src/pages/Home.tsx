import { useState, useEffect, useContext } from "react";
import Categories from "../components/categories/categories";
import PizzaBlock from "../components/pizza/pizzaBlock";
import Skeleton from "../components/pizza/skeleton";
import Sort from "../components/sort/sort";
import type { IPizza } from "../interfaces";
import Pagination from "../components/pagination/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice";
import type { RootState } from "../redux/store";






const Home=()=>{
  const [items,setItems]=useState<IPizza[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(true)
  const [currentPage,setCurrentPage]=useState(1);
  const {searchValue}=useContext(SearchContext)

  const sortType=useSelector((state:RootState)=>state.filter.sort.property)
  const activeCategory = useSelector((state:RootState)=>state.filter.activeCategory)
  const dispatch = useDispatch();
  const setActiveType =(id:number)=>{
    dispatch(setActiveCategory(id))
  }


  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://6892272c447ff4f11fbf60cb.mockapi.io/items?page=${currentPage}&search=${searchValue}&limit=4&${activeCategory > 0 ? `category=${activeCategory}`:''}&sortBy=${sortType}`)
  .then((res)=>{
    return res.json();
  })
  .then((arr)=>{
    setItems(arr);
    setIsLoading(false)
  })
  },[activeCategory,sortType,currentPage,searchValue])


    return(
        <>
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveType}/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
            ? [...new Array(6)].map((_,index)=><Skeleton key={index}/>)
            : items.map((item)=><PizzaBlock key={item.id} {...item}/>)
            }
                 
          </div>
          <Pagination setCurrentPage={setCurrentPage}/>
        </div>
        </>
    )
}

export default Home