import ProductList from "./ProductList";
import { useEffect, useState } from "react";

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
  return(
    <>
          <main className="content-wrap">
            <section className="content">
              <h2 className="mt-3">Lista de productos</h2>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Categoria</th>
                    <th>Detale</th>
                  </tr>
                </thead>
                {productos.map((producto) => (
                  <ProductList producto={producto} key={producto.id} />
                ))}
              </table>
            </section>
          </main>
      </>
  )
}


export default Productos;
