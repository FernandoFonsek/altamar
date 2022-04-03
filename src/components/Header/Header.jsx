import React, { useState } from "react";

//
import logo from "../../assets/logo.png"
import español from "../../assets/español.png"
import ingles from "../../assets/ingles.png"




const Header = () => {
    
    const [idioma, setIdioma] = useState(false)

    const handleLenguage = () => setIdioma(!idioma)

return (
    <div className="z-50 fixed w-full mb-8 flex justify-around items-center bg-Rosado h-14 text-black">
        <div className="h-12 w-16" >
            <img src={logo} alt="Logo Altamar"></img>
        </div>
        <div>
            <h3></h3>
        </div>
        <button className="h-8 w-8" onClick={()=> handleLenguage()}>
            <img src={idioma ? español : ingles} alt="Logo Altamar"></img>
        </button>

    </div>
)  
} 

export default Header;