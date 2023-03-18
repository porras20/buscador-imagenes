const Cards = ({datos}) => {
    return ( 
        <div className="cards">
         { datos.length === 0 ? null 
         : 
        datos.map(dato => (
            <div className="card" key={dato.id}>
                <img src={dato.urls.small} alt="" />
                <div>
                    <h2>Photo by: {dato.user.name}.</h2>
                    <p>{dato.alt_description}</p>
                    <a href={dato.links.download}><button>Descargar</button></a>
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default Cards;