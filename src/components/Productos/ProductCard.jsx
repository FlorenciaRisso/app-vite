import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <>
            <Link to={`/Productos/${props.producto.ID_Producto}`} className="product-cart">

                <p className="product-name">{props.producto.Nombre}</p>
                <img key={props.index} src={`http://localhost:3030${props.imagen.ruta}`} alt={`Imagen ${props.index + 1}`} width={100}/>
                <p className='price' >{props.producto.Precio}</p>
            </Link>
        </>
    )
}
export default ProductCard;