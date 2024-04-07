import React, { useEffect, useState } from "react";

function CardList({ categoryId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await fetch(`http://localhost:3030/api/products?page=${page}&category=${categoryId}`);
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    };

    const fetchAllProducts = async () => {
      try {
        let allProducts = await fetchProducts(1);
        
        const secondPageProducts = await fetchProducts(2);
        allProducts = allProducts.concat(secondPageProducts);
        
        const thirdPageProducts = await fetchProducts(3);
        allProducts = allProducts.concat(thirdPageProducts);
        
        const filteredProducts = allProducts.filter(product => product.ID_Categoria === categoryId);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, [categoryId]);

  return (
    <div className="container-cards">
      <ul>
        {products.map((product) => (
          <li className="category-cart" key={product.ID_Producto}>
            <h3>{product.Nombre}</h3>
            <p>Precio: {product.Precio}</p>
            <p>Descripción: {product.Descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;