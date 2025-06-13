import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo uchun login har doim muvaffaqiyatli:
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/settings'); // login muvaffaqiyatli bo‘lsa settings sahifasiga o‘tkazamiz
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#333',
          }}
        >
          ←
        </button>

        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Tizimga kirish</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#2575fc',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
