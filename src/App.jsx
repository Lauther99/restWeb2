import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './assets/styles/components.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/path/:id' element={<component />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
