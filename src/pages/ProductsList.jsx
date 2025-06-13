import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:8000/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        alert("Mahsulot o‘chirildi");
        fetchProducts();
      } else {
        console.error("Xatolik:", await response.text());
      }
    } catch (error) {
      console.error("Tarmoq xatosi:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Mahsulotlar</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} so‘m
            <button onClick={() => deleteProduct(product.id)}>O‘chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
