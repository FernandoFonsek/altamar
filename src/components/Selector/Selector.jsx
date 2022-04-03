import React, {useContext} from "react";
import SelectorContext from "../conext/SelectorContext/SelectorContext";
import desayunoimg from "../../assets/desayunoingles.png"
import bebidaimg from "../../assets/bebidas.png"
import bocadilloimg from "../../assets/bocadillo.png"
import comidaimg from "../../assets/comida.png"
import postreimg from "../../assets/postre.png"


const Selector = () => {

    const { state, dispatch, desayuno, comida, bocadillo, bebida, postre, handleBebida, handleComida, handleDesayuno, handleBocadillo, handlePostre } = useContext(SelectorContext)
    return (
        <div className="z-40 flex justify-evenly pt-16 pb-4 bg-AzulDark fixed w-full text-white">
            <button onClick={() => handleDesayuno()} className={` ${desayuno ? 'bg-white text-black' : 'bg-Celeste' } flex-col content-between
             items-center  text-xs rounded-lg p-2 w-1/6 `}>
                <div className="mx-auto h-8 w-12" >
                    <img src={desayunoimg} alt="Logo Altamar"></img>
                </div>
                <div className= "  mt-4 font-bold">
                <p >DESAYUNO</p>
                </div>
            </button>
            <button onClick={() => handleComida()} className={` ${comida ? 'bg-white text-black' : 'bg-Celeste' }  flex-col items-center text-xs text-center rounded-lg bg-Celeste py-2 w-1/6 `}>
                <div className="mx-auto h-8 w-12 ">
                    <img src={comidaimg} alt="Logo Altamar"></img>
                </div>
                <div className=" mt-4 font-bold">
                    <p>COMIDA</p>
                </div>
            </button>
            
            <button onClick={() => handleBocadillo()} className={` ${bocadillo ? 'bg-white text-black' : 'bg-Celeste' } flex-col items-center text-xs text-center rounded-lg bg-Celeste py-2 w-1/6 `}>
                <div className="mx-auto h-8 w-12" >
                    <img src={bocadilloimg} alt="Logo Altamar"></img>
                </div>
                <div className=" mt-4 font-bold">
                    <p>BOCADILLO</p>
                </div>
            </button>
            <button onClick={() => handleBebida()} className={` ${bebida ? 'bg-white text-black' : 'bg-Celeste' } flex-col items-center text-xs text-center rounded-lg bg-Celeste py-2 w-1/6 `}>
            <   div className="mx-auto h-8 w-12" >
                    <img src={bebidaimg} alt="Logo Altamar"></img>
                </div>
                <div className=" mt-4 font-bold">
                    <h1>BEBIDA</h1>
                </div>
            </button>
            <button onClick={() => handlePostre()} className={` ${postre ? 'bg-white text-black' : 'bg-Celeste' } flex-col items-center text-xs text-center rounded-lg bg-Celeste  py-2 w-1/6`}>
                <div className="mx-auto h-8 w-12" >
                    <img src={postreimg} alt="Logo Altamar"></img>
                </div>
                <div className=" mt-4 font-bold">
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