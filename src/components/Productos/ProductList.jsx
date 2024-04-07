import { Link } from "react-router-dom"

function ProductList(props){
    return(
        <>
            <tr>
                <td>{props.producto.ID_Producto}</td>
                <td>{props.producto.Categoria.Nombre}</td>
                <td>
                <Link to={`/Productos/${props.producto.ID_Producto}`}>
                        <span>Ver Producto</span>
                </Link>
                </td>
            </tr>
        </>
    )
}
export default ProductList