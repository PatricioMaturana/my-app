import Item from "./Item";

const ItemList = ({productos}) => {
    return(
        <>
          {productos.map(producto => (
                <Item key={producto.id} item={producto} />            
          ))}
  
        </>
    )
} 

export default  ItemList;