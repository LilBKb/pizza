interface Props{
  setActiveCategory:(index:number)=>void;
  activeCategory:number
}

const Categories =({setActiveCategory,activeCategory}:Props) =>{

  const categories=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  


    return(
        <div className="categories">
              <ul>
                {categories.map((category:string,index:number)=>{
                  return <li  key={index} onClick={()=>setActiveCategory(index)} className={activeCategory==index ? 'active' : ''}>{category}</li>
                })}
              </ul>
            </div>
    )
}

export default Categories;