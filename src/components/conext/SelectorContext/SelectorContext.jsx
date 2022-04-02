import { Action } from "history";
import { createContext, useReducer, useState } from "react";
import logo from "../../../assets/logo.png"

const SelectorContext = createContext()

const inicialState= {
 list : [   
    {
        id:1,
        name: "Comidas",
        logo: logo,
    },
    {
        id:2,
        name: "postres",
        logo: logo,
    },
    {
        id:3,
        name: "bebidas",
        logo: logo,
    },
    {
        id:4,
        name: "niños",
        logo: logo,
    },
],
comidas: [
    {
        id: 1,
        name: "DESAYUNO ALTAMAR",
        price: "5",
        description: "Huevo-Chorizo-Revuelto de Verduras-Café o Zumo de Naranja",
        symbol: "€"
    },
    {
        id: 2,
        name: "TOSTADAS",
        price: "5",
        description: "Se sirven con Café o Zumo de Naranja",
        symbol: "€"
    },
    {
        id: 3,
        name: "Tostada de Mantequilla y Mermelada",
        price: "5",
        description: "",
        symbol: "€"
    },
    {
        id: 4,
        name: "Tostada de Tomate",
        price: "5",
        description: "",
        symbol: "€"
    },
    {
        id: 5,
        name: "Tostada de Tomate y Queso fundido",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 6,
        name: "Tostada de Atún",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 7,
        name: "Tostada de Atún y Tomate",
        price: "5",
        description: "",
        symbol: "€"
    }
],
bebidas: [
    {
        id: 1,
        name: "Tostada de Atún y Jamón Serrano",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 2,
        name: "Tostada de Aguacate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 3,
        name: "Tostada de Aguacate y Tomate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 4,
        name: "AREPA DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 5,
        name: "TEQUEÑOS DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 6,
        name: "BOQUERON REBOSADO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 7,
        name: "CALAMARES A LA ROMANA",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 8,
        name: "SANDWICH",
        price: "5",
        description: "Jamón-queso-lechuga",
        symbol: "€"
    },    
    {
        id: 9,
        name: "EMPANADA",
        price: "5",
        description: "Arroz-Huevo-Carne o Pollo",
        symbol: "€"
    },    
    {
        id: 10,
        name: "HAMBURGUESA DE TERNERA",
        price: "hola",
        description: "Con Patatas",
        symbol: '&euro;'
    },    
],
postres: [
    {
        id: 1,
        name: "Tostada de Atún y Jamón Serrano",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 2,
        name: "Tostada de Aguacate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 3,
        name: "Tostada de Aguacate y Tomate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 4,
        name: "AREPA DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 5,
        name: "TEQUEÑOS DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 6,
        name: "BOQUERON REBOSADO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 7,
        name: "CALAMARES A LA ROMANA",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 8,
        name: "SANDWICH",
        price: "5",
        description: "Jamón-queso-lechuga",
        symbol: "€"
    },    
    {
        id: 9,
        name: "EMPANADA",
        price: "5",
        description: "Arroz-Huevo-Carne o Pollo",
        symbol: "€"
    },    
    {
        id: 10,
        name: "HAMBURGUESA DE TERNERA",
        price: "5",
        description: "Con Patatas",
        symbol: "€"
    },    
],
niños: [
    {
        id: 1,
        name: "Tostada de Atún y Jamón Serrano",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 2,
        name: "Tostada de Aguacate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 3,
        name: "Tostada de Aguacate y Tomate",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 4,
        name: "AREPA DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 5,
        name: "TEQUEÑOS DE QUESO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 6,
        name: "BOQUERON REBOSADO",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 7,
        name: "CALAMARES A LA ROMANA",
        price: "5",
        description: "",
        symbol: "€"
    },    
    {
        id: 8,
        name: "SANDWICH",
        price: "5",
        description: "Jamón-queso-lechuga",
        symbol: "€"
    },    
    {
        id: 9,
        name: "EMPANADA",
        price: "5",
        description: "Arroz-Huevo-Carne o Pollo",
        symbol: "€"
    },    
    {
        id: 10,
        name: "HAMBURGUESA DE TERNERA",
        price: "5",
        description: "Con Patatas",
        symbol: "€"
    },    
],

}


const reducer = (state, action) => {
 switch (action.type){
//     //     // case "SELECIONADO":
//     //      return {
//     //          ...state
//     //     //     comidasSelect: true,
//     //     //     bebidasSelect: false
    
//     // }
 default:
     return state;
 }
 }


const SelectorProvider =({children}) => {

    const [state, dispatch] = useReducer (reducer, inicialState)

    // useState
    const [comidas, setComidas] = useState(false)
    const [bebidas, setBebidas] = useState(false)
    const [postres, setPostres] = useState(false)
    const [niños, setNiños] = useState(false)

    //funciones
    const handleBebidas = () => {
        setBebidas(!bebidas)
        setComidas(false)
        setNiños(false)
        setPostres(false)
    }
    const handleComidas = () =>{ 
        setBebidas(false)
        setComidas(!comidas)
        setNiños(false)
        setPostres(false)
        }
    const handleNiños = () => {
        setBebidas(false)
        setComidas(false)
        setNiños(!niños)
        setPostres(false)
    }
    const handlePostres = () => {
        setBebidas(false)
        setComidas(false)
        setNiños(false)
        setPostres(!postres)
    }

    console.log(comidas)


const data = {
    state,
    dispatch,
    handleBebidas,
    handleComidas,
    handlePostres,
    handleNiños,
    comidas,
    bebidas,
    postres,
    niños
}

return <SelectorContext.Provider value={data}>
    {children}
</SelectorContext.Provider>


}

export {SelectorProvider};
export default SelectorContext;
