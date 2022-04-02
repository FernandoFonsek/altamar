import React, {useContext} from "react";
import SelectorContext from "../conext/SelectorContext/SelectorContext";
import desayuno from "../../assets/desayunoingles.png"
import bebidas from "../../assets/bebidas.png"
import bocadillo from "../../assets/bocadillo.png"
import comida from "../../assets/comida.png"
import postre from "../../assets/postre.png"
import desayunoprueba from "../../assets/desayunoprueba.png"


const Selector = () => {

    const { state, dispatch, handleBebidas, handleComidas, handleNiños, handlePostres } = useContext(SelectorContext)
    return (
        <div className="flex justify-evenly my-8 text-white">
            <button onClick={() => handleComidas()} className="flex-col content-between
             items-center  text-xs rounded-lg bg-Celeste hover:bg-white hover:text-black p-2 w-1/6">
                <div className=" mx-auto h-8 w-12" >
                    <img src={desayuno} alt="Logo Altamar"></img>
                </div>
                <div className="tracking-tight mt-4 font-bold">
                <p >DESAYUNO</p>
                </div>
            </button>
            <button onClick={() => handleBebidas()} className="flex-col items-center text-xs text-center rounded-lg bg-Celeste hover:bg-white hover:text-black py-2 w-1/6">
                <div className="mx-auto h-8 w-12" >
                    <img src={comida} alt="Logo Altamar"></img>
                </div>
                <div className="tracking-tight mt-4 font-bold">
                    <p>COMIDA</p>
                </div>
            </button>
            
            <button onClick={() => handlePostres()} className="flex-col items-center text-xs text-center rounded-lg bg-Celeste hover:bg-white hover:text-black py-2 w-1/6">
                <div className="mx-auto h-8 w-12" >
                    <img src={bocadillo} alt="Logo Altamar"></img>
                </div>
                <div className="tracking-tight mt-4 font-bold">
                    <p>BOCADILLO</p>
                </div>
            </button>
            <button onClick={() => handleNiños()} className="flex-col items-center text-xs text-center rounded-lg bg-Celeste hover:bg-white hover:text-black py-2 w-1/6">
            <   div className="mx-auto h-8 w-12" >
                    <img src={bebidas} alt="Logo Altamar"></img>
                </div>
                <div className="tracking-tight mt-4 font-bold">
                    <h1>BEBIDA</h1>
                </div>
            </button>
            <button onClick={() => handleNiños()} className="flex-col items-center text-xs text-center rounded-lg bg-Celeste hover:bg-white hover:text-black py-2 w-1/6">
                <div className="mx-auto h-8 w-12" >
                    <img src={postre} alt="Logo Altamar"></img>
                </div>
                <div className=" tracking-tight mt-4 font-bold">
                    <p>POSTRE</p>
                </div>
            </button>
            

            {/* {state?.list?.map( item =>
            <button onClick={() => dispatch({ type: "SELECIONADO", payload:  item.name })} key={item.id} className="flex-col items-center text-center rounded-lg bg-Celeste hover:bg-white hover:text-black py-2 w-1/5">
                <div className="">
                    <p>{item.name}</p>
                </div>
                <div>
                    <p>{item.name}</p>
                </div>
            </button>
        )
    }     */}
        </div>
    )
}
export default Selector;