import React from "react";
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";
import prueba from "../../assets/prueba.png"
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Prueba from "../../components/Content/Prueba";
const Home = () =>{

    return(
        <div className="bg-AzulDark">
            <Header/>
            <Selector/> 
            <Content/>
            <Footer/> 

        </div>
    )
}

export default Home;