import React from "react";
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";
import location from "../../assets/location.png"
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Prueba from "../../components/Content/Prueba";
const Home = () =>{

    return(
        <div className="bg-AzulDark">
            <Header/>
            <Selector/> 
            <Content/>
            <div className="mx-auto w-11/12">
                <a href="https://www.google.es/maps/place/PESCA+MARE+NOSTRUM+S.L./@37.8189879,-0.7575635,18z/data=!4m5!3m4!1s0xd630ff64b5b1895:0x74894ff78b83b110!8m2!3d37.8189879!4d-0.7564466?hl=es" target="_blanck" rel="noreferrer">
                    <img src={location} alt=""/>
                </a>
            </div>
            {/* <Prueba/> */}
            <Footer/>
        </div>
    )
}

export default Home;