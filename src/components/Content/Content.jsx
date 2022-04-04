import React, {useContext} from "react";
import SelectorContext from "../conext/SelectorContext/SelectorContext";

//Assets
import chiringuito from "../../assets/chiringuito.png"
import muelle from "../../assets/muelle.png"
import sol from "../../assets/sol.png"
import palmera from "../../assets/palmera.png"

const Content = () => {

    const {state, dispatch, comida, bebida, postre, bocadillo, desayuno } = useContext(SelectorContext)
    console.log(comida)
    return (
        <div className="mb-48"> 
        <div className="flex-col items-center mx-4 pt-40" >
            {desayuno ? state?.desayuno.map( item =>
                <div key={item.id} className="border-b-2 border-gray-300 mb-3 rounded-2xl bg-slate-50 px-4 shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1"><spam className="bg-Celeste rounded-md text-center px-1 ">{item.codigo}</spam> {item.name}</h3>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div>
                    <div className="text-gray-500">
                        <p>{item.adddescription}</p>
                    </div>
                    { item.price ? <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div>: null }
                </div>
            )
            :
            comida ? state.comida.map(item => 
                <div key={item.id} className="mb-3 rounded-2xl bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1"><spam className="bg-Celeste rounded-md text-center px-1 ">{item.codigo}</spam> {item.name}</h3>
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
            bocadillo ? state.bocadillo.map(item => 
                <div key={item.id} className="mb-3 rounded-2xl bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1"><spam className="bg-Celeste rounded-md text-center px-1 ">{item.codigo}</spam> {item.name}</h3>
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
            bebida ? state.bebida.map(item => 
                <div key={item.id} className="mb-3 rounded-2xl bg-slate-50 px-4 shadow-md shadow-white opacity-90 py-1 ">
                    {item.price ? <div className="font-medium">
                         <h3 className="font-bold mt-1"><spam className="bg-Celeste rounded-md text-center px-1 ">{item.codigo}</spam> {item.name}</h3>
                    </div>
                    : <h3 className="font-extrabold mt-1 text-center">{item.name}</h3>  }
                    {item.price ? <div className="text-gray-500">
                        <p>{item.description}</p>
                    </div> : null }
                    {item.price ? <div className="flex justify-end  text-right pr-2 inline-block">
                        <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">{item.price}{item.symbol}</h3>
                    </div> : null}
                </div>
                ) 
            :  
            postre ? state.postre.map(item => 
                <div key={item.id} className="mb-3 rounded-2xl bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1  ">
                    <div className="font-medium">
                        <h3 className="font-bold mt-1"><spam className="bg-Celeste rounded-md text-center px-1 ">{item.codigo}</spam> {item.name}</h3>
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
            <div className="min-h-4/5">
                <div className="flex justify-start">
                    <div className="ml-0  h-20 w-20 mb-10" >
                        <img src={sol} alt="Logo Altamar"></img>
                    </div>
                </div>
                <div className="flex aling-center justify-center text-white font-bold text-center h-2/4 ">
                    <div className="">
                        <div className="mx-auto mb-3 h-20 w-20 " >
                            <img src={chiringuito} alt="Logo Altamar"></img>
                        </div>
                        <h2 className="text-4xl hola">¡Bienvenido!</h2>
                        <h2 className="text-4xl holaAltamar text-Rosado">Altamar</h2>
                        <h3 className="hola">¿Qué te apetece hoy?</h3>
                    </div>
                </div>
                <div className="flex justify-end mt-10">
                    <div className="ml-0 mt-10 h-20 w-24 mb-8">
                        <img src={palmera} alt="Logo Altamar"></img>
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
    )
}

export default Content ;

        {/* <div className=" m-6 " >
            <div className="mb-3 rounded-full bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1 ">
                <div className="font-medium">
                   <h3 className="font-bold mt-1"> desayunoS </h3>
                </div>
                <div className="text-gray-500">
                    <p>Tostadas ricas y nutritivas  </p>
                </div>
                <div className="flex justify-end  text-right pr-2 inline-block">
                    <h3 className="font-bold bg-Celeste rounded-full px-2 py-1">5,00€</h3>
                </div>
            </div>
            <div className=" mb-3 rounded-full bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1 ">
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
            <div className="mb-3 rounded-full bg-slate-50 px-4  shadow-md shadow-white opacity-90 py-1 ">
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