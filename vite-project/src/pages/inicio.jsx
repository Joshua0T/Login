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
          className="relative px-4 py-2 font-semibold text-black bg-green-600 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Iniciar Sesión
        </button>

        {mensaje && <p className="text-center text-sm text-green-500 mt-4">{mensaje}</p>}
        <br />
        <a href="/" className="text-center text-sm font-semibold text-decoration-line: underline">Volver al Inicio</a>
        <br />
        <a href="/recuperar" className="text-sm text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
      </form>
    </>
  );
}
