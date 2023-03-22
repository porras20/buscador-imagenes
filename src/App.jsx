import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Photos } from './pages/Photos'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/photos' element={<Photos />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
