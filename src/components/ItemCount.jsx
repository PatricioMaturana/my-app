import { useEffect, useState } from "react";
import Item from "./Item";

const ItemCount = ({stock}) =>{
    const [contador, setContador] = useState(1);
    const [existencia, setStock] = useState(stock);

    const comprar = () => {
        setStock(existencia-contador);
       
        if(existencia-contador==0){
            setContador(0);
        }else{setContador(1);}
    }
   
    const aumenta = ()=>{
    if (contador < existencia) { 
        setContador(contador + 1); }
    }
    const disminuye = ()=>{
    if (contador > 1 ){
        setContador(contador-1);}
    }


    return(
            <div><button type="button" className="boton" onClick={comprar}>Agregar al carro</button>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-4 p-2 btn-sm" role="group">
                    <button type="button" className="btn btn-secondary bg-black" onClick={disminuye}>-</button>
                    <button type="button" className="btn bg-white disabled"><b>{contador}</b></button>
                    <button type="button" className= "btn btn-secondary bg-black" onClick={aumenta}>+</button>
                </div>
            </div>
            </div>
    )

}
export default ItemCount;