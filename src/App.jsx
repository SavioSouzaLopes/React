import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
//import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import ApiRickandMorty from './pages/ApiRickandMorty'

function App() {
  return (
    <>
          
   <Header />

    <Routes>
      <Route path='/' element ={<ApiRickandMorty/>} />
      <Route path='/about' element ={<About/>} />
    </Routes>

    <About/>

    <Footer/>
    </>
  )
}

export default App