import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {
  const [search, setSearch] = useState('');
  const [datos, setDatos] = useState([]);
  const [url, setUrl] = useState('https://api.unsplash.com/photos/?client_id=fb-RZ5I90TondzzVbKvLKNMia-aJaqIpujJ4XB0QC6o')
  

  useEffect(() => {

    if (!search) {
      const consultarApi = async () =>{
        const result = await axios.get(url);
        const resultado = result.data;
        setDatos(resultado);
      }
      consultarApi()
    }
    else{
        const consultarApi2 = async () =>{
          const result = await axios.get(`https://api.unsplash.com/search/photos/?client_id=fb-RZ5I90TondzzVbKvLKNMia-aJaqIpujJ4XB0QC6o&query=${search}`)
          const resultado = result.data.results;
          setDatos(resultado)
        }
        consultarApi2()
      }
  }, [search])

  const busqueda = (busqueda) =>{
    setSearch(busqueda);
  }
  
  return (
    <>
      <Header />
      <Formulario busqueda={busqueda}/>
      <Cards datos={datos}/>
    </>
  )
}

export default App
