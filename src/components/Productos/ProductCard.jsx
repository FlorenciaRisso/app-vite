import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <>

            <Link to={`/Productos/detail/${props.producto.id}`} className="product-cart w-25">
                <p>{props.producto.name}</p>
                <img key={props.index} src={`http://localhost:3030${props.imagen.ruta}`} alt={`Imagen ${props.index + 1}`} width={100}/>
                <p>{props.producto.price}</p>

            </Link>
        </>
    )
}
export default ProductCard;