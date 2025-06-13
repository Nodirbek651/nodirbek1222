import React, { useState } from 'react';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();

    // Bu yerda backendga yuborishingiz mumkin
    console.log('Yangi login:', username);
    console.log('Yangi parol:', password);

    setMessage('✅ Maʼlumotlar muvaffaqiyatli saqlandi!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <form
        onSubmit={handleSave}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '40px 30px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '460px',
        }}
      >
        <h2
          style={{
            marginBottom: '30px',
            textAlign: 'center',
            color: '#333',
            fontSize: '24px',
          }}
        >
          Sozlamalarni o‘zgartirish
        </h2>

        {/* Login */}
        <div style={{ marginBottom: '24px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555',
            }}
          >
            Yangi login
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Yangi foydalanuvchi nomi"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '15px',
              outline: 'none',
            }}
          />
        </div>

        {/* Parol */}
        <div style={{ marginBottom: '30px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#555',
            }}
          >
            Yangi parol
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Yangi parol"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '15px',
              outline: 'none',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s ease',
          }}
        >
          Saqlash
        </button>

        {message && (
          <div
            style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#28a745',
              fontWeight: 'bold',
              fontSize: '15px',
            }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default SettingsPage;
