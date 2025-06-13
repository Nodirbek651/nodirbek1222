import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http:127.0.0.1/api/register', {
        fullName,
        username,
        password,
      });

      if (response.data.success) {
        setSuccessMsg('Muvaffaqiyatli ro‘yxatdan o‘tdingiz!');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setErrorMsg(response.data.message || 'Xatolik yuz berdi');
      }
    } catch (error) {
      console.error('Ro‘yxatdan o‘tishda xatolik:', error);
      setErrorMsg('Server bilan ulanishda xatolik!');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    }}>
      <form
        onSubmit={handleRegister}
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
          Ro‘yxatdan o‘tish
        </h2>

        {errorMsg && <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green', textAlign: 'center' }}>{successMsg}</p>}

        {/* Full Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Username */}
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

        {/* Password */}
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
          Ro‘yxatdan o‘tish
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
