import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !username || !password) {
      alert('Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }

    console.log('Register:', fullName, username, password);

    alert('Ro‘yxatdan o‘tildi!');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          background: '#ffffff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
          width: '100%',
          maxWidth: '420px',
          position: 'relative',
        }}
      >
        {/* Ortga qaytish tugmasi */}
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'transparent',
            border: 'none',
            fontSize: '22px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#444',
          }}
        >
          ←
        </button>

        <h2
          style={{
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px',
            fontSize: '28px',
          }}
        >
          Ro‘yxatdan o‘tish
        </h2>

        {/* Full Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>To‘liq ism</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={inputStyle}
            placeholder="Ismingizni kiriting"
          />
        </div>

        {/* Username */}
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Foydalanuvchi nomi</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
            placeholder="Username tanlang"
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '30px' }}>
          <label style={labelStyle}>Parol</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            placeholder="Parol kiriting"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#2575fc',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s ease',
          }}
        >
          Ro‘yxatdan o‘tish
        </button>
      </form>
    </div>
  );
};

// Umumiy style'lar
const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#444',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  outline: 'none',
};

export default RegisterPage;
