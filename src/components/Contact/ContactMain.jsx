export const ContactMain = () => {
    return ( 
        <>
            <div className="banner-header">
            </div>
            <div className="contact-container">
                
                <div className="contact-title">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Nobis eligendi veritatis inventore temporibus consequuntur 
                    odio non, corrupti tenetur voluptas quaerat!
                    </p>
                </div>
                <form action="" className="contact-formulario">
                    <div className="form name">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Nombre de usuario"/>
                    </div>
                    <div className="form email">
                        <label htmlFor="">Correo electronico</label>
                        <input type="email" placeholder="Correo electronico"/>
                    </div>
                    <div className="form motivo">
                        <label htmlFor="">Motivo</label>
                        <select name="" id="">
                            <option value="">option 1</option>
                            <option value="">option 2</option>
                            <option value="">option 3</option>
                            <option value="">option 4</option>
                            <option value="">option 5</option>
                        </select>
                    </div>
                    <div className="form detalles">
                        <label htmlFor="">Detalles</label>
                        <textarea name="" id="" cols="60" rows="6" placeholder="Motivo del correo"></textarea>
                    </div>
                    <div className="form button">
                        <button>Enviar solicitud</button>
                    </div>
                </form>
            </div>
        </>
        );
}
 
