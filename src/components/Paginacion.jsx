export const Paginacion = ({setCurrentPage, currentPage}) => {
    
    const prevPage = () =>{
        setCurrentPage( currentPage - 1)
      }
      const nextPage = () =>{
        setCurrentPage( currentPage + 1)
      }

    return ( 
        <div className="pagination">
            <a href="#" className="prev" onClick={prevPage}>&laquo; Anterior</a>
            <a href="#" className="next" onClick={nextPage}>Siguiente &raquo;</a>
        </div>
     );
}
