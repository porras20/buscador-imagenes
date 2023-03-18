import { BiHomeAlt } from "react-icons/bi";
import { BiPhotoAlbum } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

const Header = () => {
    return ( 
        <nav className="nav">
            <ul className="menu">
                <li> <BiHomeAlt className="icon"/> Home</li>
                <li><BiPhotoAlbum className="icon"/> Mas fotos</li>
                <li><BiInfoCircle className="icon"/> sobre nosotros</li>
                <li><BiPhone className="icon"/> Contactanos</li>
            </ul>
        </nav>
     );
}
 
export default Header;