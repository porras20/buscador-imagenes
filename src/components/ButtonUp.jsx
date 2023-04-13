import { useEffect, useRef, useState } from 'react';
import { FaAngleUp } from "react-icons/fa";


export default function ButtonUp() {

    const [BtnUp, setbtnUp] = useState(false);
    
    document.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            setbtnUp(true);
        }
        else{
            setbtnUp(false);
        }
    })
    
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Puedes ajustar el comportamiento de desplazamiento (opcional)
          });

    }
    
  return (
    BtnUp ? 
    <div className='buttonUp' onClick={handleClick}>
        <FaAngleUp/>
    </div> 
    : null
  )
}
