import Categories from './components/categories/categories'
import Header from './components/header/header'
import PizzaBlock from './components/pizza/pizzaBlock'
import Sort from './components/sort/sort'
import './scss/app.scss'
import pizzas from'./assets/pizza.json'



function App() {

  return (
    <>
    <div className="wrapper">
      <Header/>
      </div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((item)=>{
              return <PizzaBlock key={item.id} {...item}/>
            })}
                 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
