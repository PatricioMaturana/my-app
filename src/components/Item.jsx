import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
    <div className="card mb-3 border-0" style={{ maxWidth: "440px" }}>
        <Link to={"/item/" + item.id} className="link-dark text-decoration-none ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">       {item.titulo}</h5>
                            <p  className="card-text">Autor:  {item.autor}</p>
                            <p  className="card-text">Genero: {item.genero}</p>
                            <p className="card-text">Precio: {Number(item.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                            {/*<ItemCount stock= {item.stock} />*/}
                        </div>
                    </div>
            </div> 
        </Link>
    </div>                
   )
}

export default Item;