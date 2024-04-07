import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <>
            <Link to={`/Productos/${props.producto.ID_Producto}`} className="product-cart card w-25">
                <p>{props.producto.Nombre}</p>
                <img key={props.index} src={`http://localhost:3030${props.imagen.ruta}`} alt={`Imagen ${props.index + 1}`} width={100}/>
                <p>{props.producto.Precio}</p>
            </Link>
        </>
    )
}
export default ProductCard;