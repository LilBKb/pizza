import { useState, useEffect, useContext } from "react";
import Categories from "../components/categories/categories";
import PizzaBlock from "../components/pizza/pizzaBlock";
import Skeleton from "../components/pizza/skeleton";
import Sort from "../components/sort/sort";
import type { IPizza } from "../interfaces";
import Pagination from "../components/pagination/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, setCurrentPage } from "../redux/slices/filterSlice";
import type { RootState } from "../redux/store";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";


const Home=()=>{
  const [items,setItems]=useState<IPizza[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(true)
  const {searchValue}=useContext(SearchContext)

  const sortType=useSelector((state:RootState)=>state.filter.sort.property)
  const activeCategory = useSelector((state:RootState)=>state.filter.activeCategory)
  const currentPage=useSelector((state:RootState)=>state.filter.currentPage)
  const dispatch = useDispatch();
  const setActiveType =(id:number)=>{
    dispatch(setActiveCategory(id))
  }
  const setActivePage = (page:number)=>{
    dispatch(setCurrentPage(page))
  }
  const debouncedKeywords=useDebounce(searchValue,1500)


  useEffect(()=>{
    setIsLoading(true)
    axios.get(`https://6892272c447ff4f11fbf60cb.mockapi.io/items?page=${currentPage}&search=${debouncedKeywords}&limit=4&${activeCategory > 0 ? `category=${activeCategory}`:''}&sortBy=${sortType}`)
  .then((res)=>{
    return res.data;
  })
  .then((arr)=>{
    setItems(arr);
    setIsLoading(false)
  })
  },[activeCategory,sortType,currentPage,debouncedKeywords])


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
          <Pagination value={currentPage} setCurrentPage={setActivePage}/>
        </div>
        </>
    )
}

export default Home