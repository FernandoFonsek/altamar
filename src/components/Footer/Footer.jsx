import React from "react";

import location from "../../assets/location.png"

const Footer = () => {

    return (

        <div className="h-min-full m-8 mb-0 footerFont text-white">
            {/* <hr className="mb-0"></hr> */}

            <h3 className="font-bold">Altamar</h3>
            <h3 className="mb-4 text-gray-400">Si es tu cumpleaños informanos <i className="fa-solid fa-cake-candles"></i></h3> 
            <h3 className="font-bold">Nuestra Ubicación</h3>
            <div className="my-2 min-h-full flex-col items-center mb-4">
                <a className="mx-auto w-11/12" href="https://www.google.es/maps/place/PESCA+MARE+NOSTRUM+S.L./@37.8189879,-0.7575635,18z/data=!4m5!3m4!1s0xd630ff64b5b1895:0x74894ff78b83b110!8m2!3d37.8189879!4d-0.7564466?hl=es" target="_blanck" rel="noreferrer">
                    <img src={location} alt=""/>
                </a>
            </div>
            <h3 className="font-bold">Dirección</h3>
            <h3 className="text-gray-400">Puerto la llana</h3>
            <h3 className="text-gray-400">San Pedro del Pinatar</h3>
            <h3 className="text-gray-400">Murcia</h3>
            <h3 className="mb-4 text-gray-400">España</h3>
            <h3 className="font-bold">Horario</h3>
            <h3 className="text-gray-400 mb-4">Todos los dias a partir de las 8:00</h3>
            <h3 className="font-bold">Contacto</h3>
            <a className="text-sm text-gray-400" href="tel:602520620">+34 611 24 42 40 </a>
            <h3 className="text-center font-bold mt-4 mb-2">Siguenos en</h3>
            <div className="flex  justify-around items-center mx-auto w-1/2 ">
                <a href="https://altamar.vercel.app/menu"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://altamar.vercel.app/menu"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://altamar.vercel.app/menu"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://altamar.vercel.app/menu"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://altamar.vercel.app/menu"><i className="fa-brands fa-youtube"></i></a>
            </div>

            <p className="text-center font-thin text-xs mt-8 text-gray-400">Copyright &copy; 2022 All Rights Reserved by Altamar </p>
        
        </div>
    )
}

export default Footer;