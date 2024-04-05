import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "./Product.module.css";



function Productos(){
  const [productos, setProductos] = useState([]);

  useEffect(
    () => {
      fetch("http://localhost:3030/api/products")
      .then((respuesta) => (respuesta.json()))
      .then((productos) => setProductos(productos.products));
    }, []
  )
  if(!productos){
    return (
      <p>Cargando...</p>
    )
  }
  return(
    <>
          <main className="content-wrap">
            <section className="content">
              <h2 className="mt-3">Lista de productos</h2>
              {/* <table className={style.table}>
                <thead>
                  <tr>
                    <th>Id</th>

                    <th>Categoria</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                {productos.map((producto) => (
                  <ProductList producto={producto} key={producto.id} />
                ))}
              </table> */}
              <div className="d-flex ">
                {productos.map((producto) => (
                  <ProductCard imagen={producto.imagen} index={producto.id} key={producto.id} producto={producto} />
                ))}
              </div>
              <div>
                <a href={`http://localhost:3030/api/products/?page=2`}>
                  Pagina 2 
                </a>
              </div>
            </section>
          </main>
      </>
  )
}


export default Productos;
