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
        name: "postre",
        logo: logo,
    },
    {
        id:3,
        name: "bebida",
        logo: logo,
    },
    {
        id:4,
        name: "Bocadillo",
        logo: logo,
    },
],
desayuno: [
    {
        id: 1,
        name: "TOSTADAS",
        price: "2,60",
        description: "Con Tomate o Aguacate o Atún o Jamón Serrano",
        adddescription: "",
        symbol: "€",
        codigo: "D-1"
    },
    {
        id: 2,
        name: "TOSTADAS CON ACEITE",
        price: "1,60",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "D-2"
    },
    {
        id: 3,
        name: "TOSTADAS CON MANTEQUILLA",
        price: "1,60",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "D-3"
    },
    {
        id: 4,
        name: "TOSTADAS CON MERMELADA",
        price: "1,60",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "D-4"
    },
    {
        id: 5,
        name: "SANDWICH",
        price: "2,00",
        description: "Jamón York-Queso",
        adddescription: "",
        symbol: "€",
        codigo: "D-5"

    },    
    {
        id: 6,
        name: "CROISSANT",
        price: "2,00",
        description: "Jamón York-Queso",
        adddescription: "",
        symbol: "€",
        codigo: "D-6"
    },    
    {
        id: 7,
        name: "EMPANADA LATINA",
        price: "1,50",
        description: "Arroz-Carne-Huevo",
        adddescription: "",
        symbol: "€",
        codigo: "D-7"

    },    
    {
        id: 8,
        name: "AMERICANO",
        price: "6,00",
        description: "Chorizo-Huevo frito-Revuelto de verduras",
        adddescription: "",
        symbol: "€",
        codigo: "D-8"

    },    
    {
        id: 9,
        name: "ENSALADA DE FRUTA (Máximo 3 Frutas y 2 Topping)",
        price: "5,00",
        description: "Fruta: Sandia-Plátano-Kiwi-Manzana-Papaya-Piña",
        adddescription: "Topping: Leche condensada-Chips de chocolate-Nutella-Chantilly-Avena",
        symbol: "€",
        codigo: "D-9"
    },
],
comida: [
    {
        id: 1,
        name: "ENSALADA AGRIDULCE",
        price: "8,00",
        description: "Piña-Repollo-Queso-Manzana-Aderezo",
        adddescription: "",
        symbol: "€",
        codigo: "C-1"
    },    
    {
        id: 2,
        name: "ENSALADA CESAR",
        price: "8,00",
        description: "Pechuga-Lechuga-Cebolla-Tomate-Queso-Pan Tostado-Aderezo",
        adddescription: "",
        symbol: "€",
        codigo: "C-2"
    },    
    {
        id: 3,
        name: "ENSALADA RUSA",
        price: "8,00",
        description: "Patatas-Guisantes-Huevo Cocido-Zanahoria-Atún",
        adddescription: "",
        symbol: "€",
        codigo: "C-3"
    },    
    {
        id: 4,
        name: "ENSALADA MURCIANA",
        price: "4,00",
        description: "Tomate-aceituna Negra-Huevo Cocido- Cebolla",
        adddescription: "",
        symbol: "€",
        codigo: "C-4"
    },    
    {
        id: 5,
        name: "CAMARONES A LA ROMANA",
        price: "12,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-5"
    },    
    {
        id: 6,
        name: "BOQUERONES REBOSADOS",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-6"
    },    
    {
        id: 7,
        name: "BICICLETA",
        price: "2,50",
        description: "Rosquilla-Ensalada verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-7"
    },    
    {
        id: 8,
        name: "MARINERA",
        price: "3,00",
        description: "Rosquilla-ensalada verde-Anchoa",
        adddescription: "",
        symbol: "€",
        codigo: "C-8"
    },    
    {
        id: 9,
        name: "SALMÓN A LA PLANCHA",
        price: "15,00",
        description: "Patatas-Salsa verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-9"
    },    
    {
        id: 10,
        name: "PECHUGA A LA PLANCHA",
        price: "15,00",
        description: "Patatas-Salsa verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-10"
    },    
    {
        id: 11,
        name: "ENTRECOP A LA PLANCHA",
        price: "15,00",
        description: "Patatas-Salsa verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-11"
    },    
    {
        id: 12,
        name: "EMPERADOR A LA PLANCHA",
        price: "15,00",
        description: "Patatas-Salsa verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-12"
    },
    {
        id: 13,
        name: "LOMO A LA PLANCHA",
        price: "15,00",
        description: "Patatas-Salsa verde",
        adddescription: "",
        symbol: "€",
        codigo: "C-13"
    }, 
    {
        id: 14,
        name: "ALITAS BBQ",
        price: "8,00",
        description: "Patatas",
        adddescription: "",
        symbol: "€",
        codigo: "C-14"
    },
    {
        id: 15,
        name: "NUGGETS DE POLLO",
        price: "8,00",
        description: "Patatas",
        adddescription: "",
        symbol: "€",
        codigo: "C-15"
    },
    {
        id: 16,
        name: "PINCHO DE TORTILLA",
        price: "3,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-16"
    },
    {
        id: 17,
        name: "PATATAS BRAVAS",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-17"
    },
    {
        id: 18,
        name: "HAMBURGUESA DE TERNERA",
        price: "10,00",
        description: "Patatas-Tomate-Cebolla-Queso-Jamón York-Lechuga",
        adddescription: "",
        symbol: "€",
        codigo: "C-18"
    },
    {
        id: 19,
        name: "HOT DOG",
        price: "6,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-19"
    },
    {
        id: 20,
        name: "SALCHIPAPA",
        price: "6,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "C-20"
    },
],
bocadillo: [
    {
        id: 1,
        name: "PECHUGA",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-1"
    },    
    {
        id: 2,
        name: "LOMO",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-2"
    },    
    {
        id: 3,
        name: "ATÚN",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-3"
    },    
    {
        id: 4,
        name: "JAMÓN SERRANO",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-4"
    },    
    {
        id: 5,
        name: "JAMÓN YORK Y QUESO",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-5"
    },    
    {
        id: 6,
        name: "TORTILLA DE PATATAS",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "B-6"
    }
],
bebida: [  
    {
        id: 1,
        name: "CAÑA",
        price: "1,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-1"
    },    
    {
        id: 2,
        name: "HEINEKEN",
        price: "3,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-2"
    },    
    {
        id: 3,
        name: "TANQUE/PINTA",
        price: "3,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-3"
    },    
    {
        id: 4,
        name: "CIDRA",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-4"
    },    
    {
        id: 5,
        name: "TERCIO",
        price: "3,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-5"
    },    
    {
        id: 6,
        name: "QUINTO",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-6"
    },    
    {
        id: 7,
        name: "BOTE DE AGUA PEQUEÑO",
        price: "1,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-7"
    },    
    {
        id: 8,
        name: "BOTE DE AGUA GRANDE",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-8"
    },   
    {
        id: 9,
        name: "BOTE DE CERVEZA",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-9"
    },   
    {
        id: 10,
        name: "COCA COLA",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-10"
    },   
    {
        id: 11,
        name: "COCA COLA ZERO",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-11"
    },  
    {
        id: 12,
        name: "FANTA",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-12"
    },  
    {
        id: 13,
        name: "AQUARIUS",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-13"
    },  
    {
        id: 14,
        name: "NESTEA",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-14"
    },  
    {
        id: 15,
        name: "ZUMO DE NARANJA",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-15"
    },  
    {
        id: 16,
        name: "ZUMO DE BOTELLA",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-16"
    },  
    {
        id: 17,
        name: "CHOLECT",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-17"
    },  
    {
        id: 18,
        name: "BUTTER",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-18"
    },  
    {
        id: 19,
        name: "TÓNICA",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-19"
    },  
    {
        id: 20,
        name: "AGUA CON GAS",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-20"
    },  
    {
        id: 21,
        name: "AGUA GRANDE",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-21"
    },  
    {
        id: 22,
        name: "RED BULL",
        price: "5,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-22"
    },  
    {
        id: 23,
        name: "BITTER KAS",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-23"
    },  
    {
        id: 24,
        name: "AGUA CON GAS",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-24"
    },  
    {
        id: 25,
        name: "SEVEN UP",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-25"
    },  
    {
        id: 26,
        name: "GRANIZADOS",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-26"
    },  
    {
        id: 27,
        name: "CHOLAOS",
        price: "6,00",
        description: "Fruta picada-Helado-Topping",
        adddescription: "",
        symbol: "€",
        codigo: "BE-27"
    },  
    {
        id: 28,
        name: "MANGO BICHE",
        price: "3,00",
        description: "Sal-Limón-Pimienta",
        adddescription: "",
        symbol: "€",
        codigo: "BE-28"
    },  
    {
        id: 29,
        name: "BATIDOS",
        price: "5,00",
        description: "Mango-Plátano-Piña-Fresa-Frutos rojos",
        adddescription: "",
        symbol: "€",
        codigo: "BE-29"
    },  
    {
        id: 30,
        name: "CANASTA PIÑATA",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-30"
    },  
    {
        id: 31,
        name: "CONOS",
        price: "2,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-31"
    },  
    {
        id: 32,
        name: "ARRINAS",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-32"
    },  
    {
        id: 33,
        name: "MALTEADAS",
        price: "6,00",
        description: "Fresa-Vainilla-Chocolate",
        adddescription: "",
        symbol: "€",
        codigo: "BE-33"
    },  
    {
        id: 34,
        name: "C O C T E L E S",
        price: "",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: ""
    },  
    {
        id: 35,
        name: "MOJITO",
        price: "6,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-34"
    },  
    {
        id: 36,
        name: "CHUPITOS",
        price: "1,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-35"
    },  
    {
        id: 37,
        name: "WHISKY A LA ROCA",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-35"
    },  
    {
        id: 37,
        name: "COPA DE VINO TINTO",
        price: "3,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-36"
    },  
    {
        id: 38,
        name: "BOTELLA DE VINO TINTO",
        price: "15,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-37"
    },  
    {
        id: 39,
        name: "COPA DE VINO BLANCO",
        price: "3,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-38"
    },  
    {
        id: 40,
        name: "BOTELLA DE VINO BLACO",
        price: "15,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-39"
    },  
    {
        id: 41,
        name: "TINTO DE VERANO",
        price: "2,50",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-40"
    },  
    {
        id: 42,
        name: "JARRA TINTO DE VERANO",
        price: "8,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-41"
    },  
    {
        id: 43,
        name: "MICHELADA",
        price: "3,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "BE-42"
    },  
],
postre: [
    {
        id: 1,
        name: "TARTA DE QUESO",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "P-1"
    },    
    {
        id: 2,
        name: "GENOVESA",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "P-2"
    },    
    {
        id: 3,
        name: "ARROZ CON LECHE",
        price: "4,00",
        description: "",
        adddescription: "",
        symbol: "€",
        codigo: "P-3"
    },    
  
    ]
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
    const [desayuno, setDesayuno] = useState(false)
    const [comida, setComida] = useState(false)
    const [bocadillo, setBocadillo] = useState(false)
    const [bebida, setBebida] = useState(false)
    const [postre, setPostre] = useState(false)

    //funciones
    const handleDesayuno = () => {
        setDesayuno(!desayuno)
        setBebida(false)
        setComida(false)
        setBocadillo(false)
        setPostre(false)
    }
    const handleComida = () =>{ 
        setDesayuno(false)
        setBebida(false)
        setComida(!comida)
        setBocadillo(false)
        setPostre(false)
    }
    const handleBebida = () => {
        setDesayuno(false)
        setBebida(!bebida)
        setComida(false)
        setBocadillo(false)
        setPostre(false)
    }

    const handleBocadillo = () => {
        setDesayuno(false)
        setBebida(false)
        setComida(false)
        setBocadillo(!bocadillo)
        setPostre(false)
    }
    const handlePostre = () => {
        setDesayuno(false)
        setBebida(false)
        setComida(false)
        setBocadillo(false)
        setPostre(!postre)
    }

    console.log(comida)


const data = {
    state,
    dispatch,
    handleDesayuno,
    handleBebida,
    handleComida,
    handlePostre,
    handleBocadillo,
    desayuno,
    comida,
    bebida,
    postre,
    bocadillo,
}

return <SelectorContext.Provider value={data}>
    {children}
</SelectorContext.Provider>


}

export {SelectorProvider};
export default SelectorContext;
