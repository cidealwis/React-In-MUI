import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './view/Home/Home'
import Bloges from './view/Bloges/Bloges'
import News from './view/News/News'
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/bloges" element={<Bloges/>}></Route>
        <Route path="/news" element={<News/>}></Route>
      </Routes>
    </BrowserRouter>
      
    
   </>
  )
}

export default App
