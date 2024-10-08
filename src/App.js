import React from 'react'
import Topbar from './Components/Topbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'



function App() {
  return (
   <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App