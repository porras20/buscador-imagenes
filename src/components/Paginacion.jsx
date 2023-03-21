export const Paginacion = ({setCurrentPage, currentPage, totalPages}) => {

    const prevPage = () =>{
        setCurrentPage( currentPage - 1)
      }
      const nextPage = () =>{
        setCurrentPage( currentPage + 1)
      }

    return (
        <div className="container-pagination">
            {currentPage === 1 && totalPages === 0 ?  <h1>No se encontraron resultados</h1>
            : null}
            <div className="pagination">
                {currentPage === 1 || totalPages === 0 ? null 
                : <a href="#" className="prev" onClick={prevPage}>&laquo; Anterior</a>
                }
                {currentPage >= totalPages ? null
                : <a href="#" className="next" onClick={nextPage}>Siguiente &raquo;</a> }
            </div>
            <div className="total-page">
                <p>Pagina {currentPage} de {totalPages}</p>
            </div>
        </div>
     );
}
