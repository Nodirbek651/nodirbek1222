// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px' }}>Bosh sahifa</h1>
      <button
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/login')}
      >
        Kirish
      </button>
      <button
        style={{
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/register')}
      >
        Ro‘yxatdan o‘tish
      </button>
    </div>
  );
};

export default Home;
