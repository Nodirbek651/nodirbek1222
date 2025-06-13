import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http:127.0.0.1/api/login', {
        username,
        password,
      });

      // Masalan token yoki status tekshirish
      if (response.data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/settings'); // Muvaffaqiyatli login bo‘lsa settings page ga o‘tadi
      } else {
        setErrorMsg('Login yoki parol noto‘g‘ri!');
      }
    } catch (error) {
      console.error('Login xatosi:', error);
      setErrorMsg('Server bilan ulanishda xatolik yuz berdi!');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #141e30, #243b55)',
    }}>
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
        {/* Ortga tugma */}
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

        <h2 style={{ marginBottom: '24px', textAlign: 'center', color: '#333' }}>
          Login
        </h2>

        {errorMsg && (
          <p style={{ color: 'red', marginBottom: '16px', textAlign: 'center' }}>
            {errorMsg}
          </p>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />
        </div>

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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
