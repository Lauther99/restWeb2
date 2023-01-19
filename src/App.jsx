import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './assets/styles/components.css'
import NavBar from './components/NavBar'
import 'animate.css';

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
