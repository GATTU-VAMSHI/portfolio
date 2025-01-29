
import './App.css'
import Navbar from './pages/Navbar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Quatifications from './pages/Quatifications'
import Contact from './pages/Contact'
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/qualifications' element={<Quatifications/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
