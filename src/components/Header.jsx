import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const userImage = 'https://i.pravatar.cc/150?img=3';

  const handleLogout = () => {
    const confirmLogout = window.confirm('Rostdan ham chiqmoqchimisiz?');
  
    if (confirmLogout) {
      setShowMenu(false);
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/login');
    }
  };
  

  return (
    <header
      style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>My App</h1>

      {isLoggedIn ? (
        <div style={{ position: 'relative' }}>
          <img
            src={userImage}
            alt="Profile"
            onClick={() => setShowMenu(!showMenu)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              border: '2px solid #fff',
            }}
          />

          {showMenu && (
            <div
              style={{
                position: 'absolute',
                top: '50px',
                right: 0,
                background: '#fff',
                color: '#333',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                padding: '10px',
                minWidth: '120px',
                zIndex: 100,
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: 'bold',
                  color: '#2575fc',
                }}
              >
                ⎋ Chiqish
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button
            onClick={() => navigate('/login')}
            style={{
              marginRight: '10px',
              background: '#fff',
              color: '#2575fc',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            style={{
              background: '#fff',
              color: '#6a11cb',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
