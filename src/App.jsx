import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import Formulario from './components/Formulario'

function App() {

  const [datos, setDatos] = useState([]);
  const [url, setUrl] = useState('https://api.unsplash.com/photos/?client_id=fb-RZ5I90TondzzVbKvLKNMia-aJaqIpujJ4XB0QC6o')
  useEffect(() => {
    const consultarApi = async () =>{
      const result = await axios.get(url)
      setDatos(result.data);
    }
    consultarApi()
  }, [])
  
  return (
    <>
      <Formulario />
      <Cards datos={datos}/>
    </>
  )
}

export default App
