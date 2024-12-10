import React, { useState } from "react";
import axios from "axios";

export default function Iniciar() {
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
      setMensaje("Inicio de sesión exitoso");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setMensaje(error.response?.data?.error || "Error al iniciar sesión");
    }
  };

  return (
    <>
    
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-zinc-900 drop-shadow-xl p-10 mt-28 rounded-sm"
      >
        <h1 className="text-center font-semibold">Bienvenido, Inicia Sesión</h1>
        <br />
        <div className="mb-5">
          <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Correo:
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Contraseña:
          </label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-700"
            required
          />
        </div>
        <button 
    type="submit" 
    className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Iniciar Sesión
  </button>
  
  <div className="mt-8 text-center">
    {mensaje && <p className="text-sm text-green-400 mt-4">{mensaje}</p>}
    <a href="/" className="text-sm text-blue-400 hover:underline mt-4 inline-block">Volver al Inicio</a>
    <a href="/recover-password" className="text-sm text-blue-400 hover:underline mt-2 inline-block">¿Olvidaste tu contraseña?</a>
  </div>
      </form>
    </>
  );
}
