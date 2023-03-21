import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import Formulario from './components/Formulario'
import Header from './components/Header'
import { Paginacion } from './components/Paginacion'

function App() {
  const [ search, setSearch ] = useState('');
  const [ datos, setDatos ] = useState([]);
  const [ url, setUrl ] = useState('https://api.unsplash.com/photos/?client_id=fb-RZ5I90TondzzVbKvLKNMia-aJaqIpujJ4XB0QC6o')
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);


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
          const result = await axios.get(`https://api.unsplash.com/search/photos/?client_id=fb-RZ5I90TondzzVbKvLKNMia-aJaqIpujJ4XB0QC6o&query=${search}&page=${currentPage}`)
          const resultado = result.data;
          setDatos(resultado.results);
          setTotalPages(result.data.total_pages);
        }
        consultarApi2()
      }
  }, [search, currentPage])

  const busqueda = (busqueda) =>{
    setSearch(busqueda);
  }
  return (
    <>
      <Header />
      <Formulario busqueda={busqueda}/>
      <Cards datos={datos}/>
      <Paginacion 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        totalPages={totalPages}
        />
    </>
  )
}

export default App
