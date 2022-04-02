import React, {useContext} from "react";
import SelectorContext from "../conext/SelectorContext/SelectorContext";

//Assets
import chiringuito from "../../assets/chiringuito.png"
import muelle from "../../assets/muelle.png"
import sol from "../../assets/sol.png"
import palmera from "../../assets/palmera.png"

const Content = () => {

    const {state, dispatch, comidas, bebidas, postres, niños  } = useContext(SelectorContext)
    console.log(comidas)
    return (
        <>
        {/* <div className=" m-6 " >
            <div className="mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1 ">
                <div className="font-medium">
                   <h3 className="font-bold mt-1"> DESAYUNOS </h3>
                </div>
                <div className="text-gray-500">
                    <p>Tostadas ricas y nutritivas  </p>
                </div>
                <div className="flex justify-end  text-right pr-2 inline-block">
                    <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">5,00€</h3>
                </div>
            </div>
            <div className=" mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1 ">
                <div className="font-medium">
                   <h3 className="font-bold mt-1"> DESAYUNOS </h3>
                </div>
                <div className="text-gray-500">
                    <p>Tostadas ricas y nutritivas  </p>
                </div>
                <div className="flex justify-end  text-right pr-2 inline-block">
                    <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">5,00€</h3>
                </div>
            </div>
            <div className="mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1 ">
                <div className="font-medium">
                   <h3 className="font-bold mt-1"> DESAYUNOS </h3>
                </div>
                <div className="text-gray-500">
                    <p>Tostadas ricas y nutritivas  </p>
                </div>
                <div className="flex justify-end  text-right pr-2 inline-block">
                    <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">5,00€</h3>
                </div>
            </div>
        </div> */}

        <div className="flex-col items-center m-2" >
            {comidas ? state?.comidas.map( item =>
                <div key={item.id} className="border-b-2 border-gray-300 mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1">{item.name}</h3>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div>
                </div>
            )
            : 
            bebidas ? state.bebidas.map(item => 
                <div key={item.id} className="mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1">{item.name}</h3>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div>
                </div>
                ) 
            :   
            postres ? state.postres.map(item => 
                <div key={item.id} className="mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1">{item.name}</h3>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div>
                </div>
                ) 
            :  
            niños ? state.niños.map(item => 
                <div key={item.id} className="mb-3 rounded-full bg-slate-50 px-4 leading-4 shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1">{item.name}</h3>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div>
                </div>
                ) 
            :  
            <div className="h-full">
            <div className="flex justify-start">
                <div className="ml-0  h-20 w-20 " >
                    <img src={sol} alt="Logo Altamar"></img>
                </div>
            </div>
            <div className="flex aling-center justify-center text-white font-bold text-center h-2/4 ">
                <div className="">
                    <div className="mx-auto mb-3 h-20 w-20 " >
                        <img src={chiringuito} alt="Logo Altamar"></img>
                    </div>
                    <h2 className="text-4xl">¡Bienvenido!</h2>
                    <h3>¿Qué te apetece hoy?</h3>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="ml-0 mt-10 h-20 w-24 " >
                    <img src={palmera} alt="Logo Altamar"></img>
                </div>
            </div>
            </div>
            }
        </div>
    </>
    )
}

export default Content ;