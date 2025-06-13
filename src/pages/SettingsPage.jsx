import React, { useState } from 'react';
import axios from 'axios';

const SettingsPage = () => {
  const [newUsername, setNewUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http:127.0.0.1/api/user', {
        newUsername,
        oldPassword,
        newPassword
      });

      if (response.data.success) {
        setMessage('Maʼlumotlar muvaffaqiyatli yangilandi!');
        setError('');
      } else {
        setError(response.data.message || 'Xatolik yuz berdi');
        setMessage('');
      }
    } catch (err) {
      console.error(err);
      setError('Server bilan ulanishda xatolik.');
      setMessage('');
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>Sozlamalar</h2>

      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <form onSubmit={handleSaveChanges}>
        {/* Yangi login */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
            Yangi Login
          </label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        {/* Eski parol */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
            Eski Parol
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
        </div>

        {/* Yangi parol */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
            Yangi Parol
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc'
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
            cursor: 'pointer'
          }}
        >
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
