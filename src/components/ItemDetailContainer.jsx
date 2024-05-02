import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import arregloLibros from "./json/Libros.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [libro, setLibro] = useState();

    useEffect(() => {
        const promesa = new Promise(completado => {
            setTimeout(() => {               
                completado(arregloLibros.find(buscaLibro => buscaLibro.id == parseInt(id)) );
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setLibro(respuesta);
        })
    }, [id])

    return(
            <div>
                <ItemDetail libro = {libro} />
            </div>
    )
}

export default ItemDetailContainer;