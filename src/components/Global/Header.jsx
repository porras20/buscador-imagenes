import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
const Header = () => {

    const [ open, setOpen ] = useState(false);

    const openMenu = () =>{
        setOpen(!open);
    }
    return (
        <>
            <nav className="nav">
                <div className="nav_toggle" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu ${open ? "open" : null}`}>
                    <li>
                        <BiHomeAlt className="icon"/> 
                        <NavLink to="/home" className={
                        ({isActive}) => isActive ? "active" : ""}>
                            Home
                        </NavLink> 
                    </li>

                    <li>
                        <BiPhotoAlbum className="icon"/>
                        <NavLink to="/photo" className={
                        ({isActive}) => isActive ? "active" : ""}>
                            Más fotos
                        </NavLink>
                    </li>

                    <li>
                        <BiInfoCircle className="icon"/>
                        <NavLink to="/about" className={
                        ({isActive}) => isActive ? "active" : ""}>
                            Sobre nosotros
                        </NavLink> 
                    </li>

                    <li>
                        <BiPhone className="icon"/>
                        <NavLink to="/contact" className={
                        ({isActive}) => isActive ? "active" : ""}>
                            Contacto
                        </NavLink> 
                    </li>

                </ul>
            </nav>
        </>
     );
}
 
export default Header;