

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'  

import Home from './views/Home'
import Contacto from './views/Contacto'


import './App.css'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>



    
    
    


    </>
  )
}

export default App
