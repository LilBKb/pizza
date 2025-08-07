import { createContext, useState } from 'react'
import Header from './components/header/header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom'


interface SearchTypes{
  searchValue:string;
  setSearchValue:(value:string)=>void;
}
export const SearchContext = createContext<SearchTypes>({
  searchValue:'',
  setSearchValue:()=>{}
})

function App() {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="NotFound" element={<NotFound />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App