import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import ReservationsPage from './pages/ReservationsPage';
import LadderPage from './pages/LadderPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar isLoggedIn={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reservas" element={<ReservationsPage />} />
        <Route path="/escalera" element={<LadderPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
