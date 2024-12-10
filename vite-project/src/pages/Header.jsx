import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  useEffect(() => {
    // Verifica si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginClick = () => {
    // Redirige al componente de inicio de sesión
    navigate("/Inicio"); // Asegúrate de que la ruta es la correcta
  };
  const handleRegisterClick = () => {
    // Redirige al componente de inicio de sesión
    navigate("/register"); // Asegúrate de que la ruta es la correcta
  };

  
  

  const handleUsersClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      navigate("/users"); // Redirige a la página de usuarios si está autenticado
    }
  };

  const handleLogout = () => {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/inicio"); // Redirige al inicio después de cerrar sesión
  };

  return (
    <>
      <nav className=" bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://i.pinimg.com/736x/87/69/e9/8769e9425ab7bbd2877b1bc53ea602dd.jpg"
              className="h-24 w-24 rounded-full"
              alt="Web-X"
            />
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="relative px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow-md group"
                >
                  Cerrar Sesión
                </button>
                <button
                  onClick={handleUsersClick} // Llama a la función para ir a la página de usuarios
                  className="relative px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow-md group"
                >
                  Ver Usuarios
                </button>
              </>
            ) : (
              <button
                onClick={handleLoginClick} // Llama a la función de redirección
                className="relative px-4 py-2 font-semibold text-black bg-red-700 rounded-lg shadow-md group transition-transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform scale-0 bg-green-700 rounded-lg group-hover:scale-100"></span>
                <span className="relative z-10 group-hover:text-blue-200">
                  Iniciar Sesión
                </span>
              </button>
              
            )}

            <a
              href="/register"
              className="relative px-4 py-2 font-semibold text-black bg-red-700 rounded-lg shadow-md group transition-transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform scale-0 bg-green-700 rounded-lg group-hover:scale-100"></span>
              <span className="relative z-10 group-hover:text-blue-200">
                Regístrate
              </span>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-red-700 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  onClick={handleUsersClick}
                >
                  Usuarios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="no-underline text-gray-900 dark:text-white hover:underline"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-zinc-800 rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold">Atención</h2>
            <p className="mt-2">Debes iniciar sesión para ver los usuarios.</p>
            <br />
            <button
              className="relative px-4 py-2 font-semibold text-black bg-green-600 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      {isAuthenticated && (
        <div>
          {/* Aquí iría el componente o el listado de usuarios */}
          <h2>Bienvenido, puedes ver los usuarios ahora.</h2>
        </div>
      )}
    </>
  );
}
