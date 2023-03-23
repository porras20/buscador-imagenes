const Formulario = ({busqueda}) => {
    const guardarBusqueda = e =>{
        busqueda(e.target.value)
    }
    return ( 
        <div className="container-form">
            <div className="form">
                <h2>Busca tu imagen</h2>
                <p>Busca cualquier imagen libre de derechos de autor</p>
                <input type="text" placeholder="Busca una imagen" onChange={guardarBusqueda}/>
            </div>
        </div>
     );
}
 
export default Formulario;