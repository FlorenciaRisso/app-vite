
function ProductCart(props) {
    return (
        <>
            <div className="product-cart w-25">
                <img key={props.index} src={`http://localhost:3030${props.imagen.ruta}`} alt={`Imagen ${props.index + 1}`} width={100}/>
            </div>
        </>
    )
}
export default ProductCart;