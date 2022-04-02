import React, { useState } from "react";

//
import logo from "../../assets/logo.png"
import español from "../../assets/español.png"
import ingles from "../../assets/ingles.png"




const Header = () => {
    
    const [idioma, setIdioma] = useState(false)

    const handleLenguage = () => setIdioma(!idioma)

return (
    // border-2 border-black
    
    <div className="flex justify-around items-center bg-white h-12 text-black">
        <div className="h-8 w-12" >
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