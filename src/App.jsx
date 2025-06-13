import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Ilova ishga tushganda login holatini tekshir
  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    if (status === 'true') setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route
            path="*"
            element={
              <div style={{ padding: '40px', textAlign: 'center', fontSize: '20px', color: '#444' }}>
                Bosh sahifaga xush kelibsiz! Iltimos, login yoki ro‘yxatdan o‘ting.
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
