import React from "react";
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
const Home = () =>{

    return(
        <div className="bg-AzulDark m-h-screen">
            <Header/>
            <Selector/> 
            <Content/>
            <Footer/>
        </div>
    )
}

export default Home;