const Cards = ({datos}) => {
    return ( 
        <div className="cards">
         { datos.length === 0 ? null 
         : 
        datos.map(dato => (
            <div className="card" key={dato.id}>
                <div>
                    <img src={dato.urls.small} alt="" />
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default Cards;