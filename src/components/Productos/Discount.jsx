import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Productos.css";

function Discount() {
  const [productosConDescuento, setProductosConDescuento] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/api/products`)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setProductosConDescuento(data.discountedProducts);
      });
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <div className="card-header w-100 text-center">
            <h2 className="mt-3">Productos con Descuento</h2>
          </div>

          <div className="product-list">
            {productosConDescuento.map((producto) => (
              <ProductCard
                imagen={producto.ImagenesProductos[0]}
                index={producto.ID_Producto}
                key={producto.ID_Producto}
                producto={producto}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Discount;