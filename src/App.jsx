import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import ReservationsPage from './pages/ReservationsPage';
import LadderPage from './pages/LadderPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import NavbarLogin from './components/NavbarLogin';
import HomePageLogin from './pages/HomePageLogin';



export const LoginContext = createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.access ? true : false
);

function getUser(){
    return sessionStorage.getItem('rol');
}

useEffect(() => {
function refreshTokens() {
    if (sessionStorage.refresh) {
        const url = 'https://api-v1-ctg.onrender.com/api/v1/login/user/refresh-token/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh: sessionStorage.getItem('refresh'),
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log('xd',data.access)
                sessionStorage.access = data.access;
                sessionStorage.refresh = data.refresh;
                setLoggedIn(true);
            });
    }
}

    refreshTokens();
}, []);

function changeLoggedIn(value) {
setLoggedIn(value);

if (value === false) {
    sessionStorage.clear();
}

}
return (

  <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
  <BrowserRouter>
          <Routes>
            {getUser() === "USUARIO" && (
                <>
                <Route path="/user/mis-reservas" element={<Agendar/>} />
                <Route path="/user/agendar" element={<Agendar/>} />
                </>
            )}
            {getUser() === "ADMIN" && (
                <>
                <Route path="/admin/reserva" element={<ReservationsPage/>} />
                <Route path="/admin/home" element={<HomePageLogin/>} />
                </>
            )}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/escalera" element={<LadderPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/sobre-nosotros" element={<AboutPage />} />
          </Routes>
  </BrowserRouter>
</LoginContext.Provider>
);
}

export default App;
