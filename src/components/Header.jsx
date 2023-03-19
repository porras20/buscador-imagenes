import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

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
                    <li> <BiHomeAlt className="icon"/> Home</li>
                    <li><BiPhotoAlbum className="icon"/> Mas fotos</li>
                    <li><BiInfoCircle className="icon"/> sobre nosotros</li>
                    <li><BiPhone className="icon"/> Contactanos</li>
                </ul>
            </nav>
        </>
     );
}
 
export default Header;