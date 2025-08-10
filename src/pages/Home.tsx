import { useContext, useEffect } from "react";
import Categories from "../components/categories/categories";
import PizzaBlock from "../components/pizza/pizzaBlock";
import Skeleton from "../components/pizza/skeleton";
import Sort from "../components/sort/sort";
import Pagination from "../components/pagination/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, setCurrentPage } from "../redux/slices/filterSlice";
import type { RootState } from "../redux/store";
import { useDebounce } from "../hooks/useDebounce";
import {fetchPizzas}  from "../redux/slices/pizzaSlice";


const Home=()=>{
  const {searchValue}=useContext(SearchContext)

  const sortType=useSelector((state:RootState)=>state.filter.sort.property)
  const activeCategory = useSelector((state:RootState)=>state.filter.activeCategory)
  const currentPage=useSelector((state:RootState)=>state.filter.currentPage)
  const dispatch = useDispatch();
  const items = useSelector((state:RootState)=>state.pizza.items)
  const status = useSelector((state:RootState)=>state.pizza.status)


  const setActiveType =(id:number)=>{
    dispatch(setActiveCategory(id))
  }
  const setActivePage = (page:number)=>{
    dispatch(setCurrentPage(page))
  }
  const debouncedKeywords=useDebounce(searchValue,1500)

useEffect(()=>{
  const fetchPizza = async () =>{
  dispatch<any>(fetchPizzas({
        sortType,
        debouncedKeywords,
        activeCategory,
        currentPage
      }))
}
fetchPizza()
},[sortType,debouncedKeywords,activeCategory,currentPage]) 



    return(
        <>
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveType}/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            { status === 'loading'
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