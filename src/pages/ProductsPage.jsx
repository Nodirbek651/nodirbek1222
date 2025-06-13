import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products') // Laravel server URL
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Mahsulotlar</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '250px',
              padding: '16px',
              background: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            {item.file && (
              <img
                src={item.file}
                alt={item.title}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
              />
            )}
            <h3 style={{ marginTop: '12px' }}>{item.title}</h3>
            <p>Narxi: <strong>{item.price}</strong> so‘m</p>
            <p>Soni: {item.total}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
