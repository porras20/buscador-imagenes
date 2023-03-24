import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Global/Header'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/*' element={<Error404 />}> </Route>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
