const ItemListContainer = ({titulo, texto}) =>{
    return(
        <div className="alert alert-primary text-center" role="alert">
            <div><h5>{titulo}</h5></div>
            <div><h3>{texto}</h3></div>
        </div>
    )
}

export default ItemListContainer