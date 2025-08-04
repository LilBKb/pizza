import { useState } from "react"

const Categories =() =>{

  const categories=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  const [activeIndex,setActiveIndex]=useState(0)


    return(
        <div className="categories">
              <ul>
                {categories.map((category:string,index:number)=>{
                  return <li  key={index} onClick={()=>setActiveIndex(index)} className={activeIndex==index ? 'active' : ''}>{category}</li>
                })}
              </ul>
            </div>
    )
}

export default Categories;