import { useState } from "react";

export const ContactFormulario = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [motivo, setMotivo] = useState("");
    const [detalles, setDetalle] = useState("");
    const [error, setError] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const validarformulario = e =>{
        e.preventDefault();
        if (name.trim() === '' || email.trim() === '' || 
            motivo.trim() === '' || detalles.trim() === '') 
            {
                setError(true);
                return;
            }
        
        setError(false), setSpinner(true), setName(''), 
        setEmail(''), setMotivo(''), setDetalle('');
        
        //Detenemos el spinner
        setTimeout(() => {
            setSpinner(false)
        }, 2000);
    }
    return ( 
        <div className="contact-container">
                
                <div className="contact-title">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Nobis eligendi veritatis inventore temporibus consequuntur 
                    odio non, corrupti tenetur voluptas quaerat!
                    </p>
                </div>
                {error ? 
                    <div className=""><p>Todos los campos son obligatorios</p></div>
                 : null }
                <form action="" className="contact-formulario" 
                onSubmit={validarformulario}>
                    <div className="form name">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Nombre de usuario" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </div>
                    <div className="form email">
                        <label htmlFor="">Correo electronico</label>
                        <input type="email" placeholder="Correo electronico" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>
                    <div className="form motivo">
                        <label htmlFor="">Motivo</label>
                        <select name="" id="" 
                        onChange={(e) => setMotivo(e.target.value)}
                        value={motivo}
                        >
                            <option value="">-- Seleccione una opción --</option>
                            <option value="option1">option 1</option>
                            <option value="option2">option 2</option>
                            <option value="option3">option 3</option>
                            <option value="option4">option 4</option>
                            <option value="option5">option 5</option>
                        </select>
                    </div>
                    <div className="form detalles">
                        <label htmlFor="">Detalles</label>
                        <textarea name="" id="" cols="60" rows="6" placeholder="Motivo del correo" 
                        onChange={(e) => setDetalle(e.target.value)}
                        value={detalles}
                        ></textarea>
                    </div>
                    {
                    spinner ? 
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div> 
                    :   <div className="form button">
                            <button>Enviar solicitud</button>
                        </div>}      
                </form>
            </div>
     );
}
 
