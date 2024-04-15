import CartWidget from "./CartWidget "

const Section = () => {
    return (
        <section className="contenedor">
            <div className = "container">
                <div className="input"><h2>Listado de libros a la venta</h2>
                    <label className="buscaLibro">Ingrese el titulo del libro</label>
                    <input type="text" id="buscaLibro"/>
                    <button type="button" id="btnBuscar" className="btnBuscar">Buscar</button>
                </div>
                <div className="item-contenedor" id="card-group">
                </div>
            </div>
            <div className="contenedorCarro">            
                <div className="carrito" id="carrito">
                    <div className="headerCarrito">
                        <span>Productos seleccionados</span>
                        <CartWidget />
                    </div>
                    <div id="itemsCarrito">
                    </div>
                    <div className="carrito-total">
                        <div className="fila">
                            <strong>Total</strong>
                            <span className="precioTotal">
                                $0.000,00
                            </span>
                        </div>
                        <button className="btn-pagar" id="id-btnPagar">Confirmar y pagar <i className="fa-solid fa-bag-shopping"></i> 
                        
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section