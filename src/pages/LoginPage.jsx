// LoginPage.jsx
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta al componente Navbar es correcta

export default function Login() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Estado para manejar los errores de la validación del formulario

  const navigate = useNavigate();
  
  function validateForm() {
    let validationErrors = {};
    if (!username) {
      validationErrors.email = 'El correo electrónico es obligatorio.';
    }
    if (!password) {
      validationErrors.password = 'La contraseña es obligatoria.';
    }
    return validationErrors;
  }

  function login(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Detener la ejecución si hay errores de validación
    }

    // Si no hay errores, proceder con la solicitud de inicio de sesión
    const url = 'https://api-v1-ctg.onrender.com/api/v1/login/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem('access', data.access);
        sessionStorage.setItem('refresh', data.refresh);
        
        const parts = data.access.split('.');
        const decodedPayload = atob(parts[1]);
        const payloadObject = JSON.parse(decodedPayload);

        sessionStorage.setItem('rol', payloadObject.rol);
        setLoggedIn(true);
        
        navigate(payloadObject.rol === 'USUARIO' ? '/user/agendar' : '/admin/home');
    })
    .catch(error => {
        console.error('Error al realizar la solicitud', error);
        setErrors(prevErrors => ({ ...prevErrors, form: 'Error al iniciar sesión.' }));
    });
  }

  return (
    <>
      <Navbar /> {/* Inclusión del componente Navbar */}
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Iniciar Sesión</h2>
          <form onSubmit={login} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className={`shadow appearance-none border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="email"
                placeholder="ejemplo@dominio.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className={`shadow appearance-none border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between">
              <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                ¿Olvidaste tu contraseña?
              </a>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
