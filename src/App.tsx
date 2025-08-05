import Header from './components/header/header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './scss/app.scss'
import { Routes,Route } from 'react-router-dom'



function App() {
  return (
    <>
    <div className="wrapper">
      <Header/>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="NotFound" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
