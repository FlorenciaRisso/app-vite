import { Link } from "react-router-dom"

function ProductList(props){
    return(
        <>
            <tr>
                <td>{props.producto.id}</td>
                <td>{props.producto.categories}</td>
                <td>
                <Link to={`/Productos/detail/${props.producto.id}`}>
                        <span>Ver Producto</span>
                </Link>
                </td>
            </tr>
        </>
    )
}
export default ProductList