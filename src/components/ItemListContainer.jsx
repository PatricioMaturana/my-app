import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import arregloLibros from "./json/Libros.json";
import ItemList from "./ItemList";


const ItemListContainer = () =>{
    const [libro, setLibro] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const promesa = new Promise(completado =>{
            setTimeout(() => {
               completado(id ? arregloLibros.filter(genero =>genero.genero == id) : arregloLibros);
            },2000);
        });

        promesa.then( respuesta=> {
                setLibro(respuesta);
        });
    },[id])

    return(
        <div className="container">
            <div className="row my-5">
                <ItemList productos = {libro} />
            </div>
        </div>
    )
}

export default ItemListContainer 