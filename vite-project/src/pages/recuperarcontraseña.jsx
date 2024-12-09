import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Cambia a useNavigate para React Router

export default function RecuperarContraseña() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/forgot-password", { correo });
      setMensaje(response.data.message);
      // Opcional: redirigir tras el envío exitoso
      navigate("/confirmacion"); // Cambia "#" por una ruta válida, como "/confirmacion"
    } catch (error) {
      setMensaje(error.response?.data?.error || "Error al enviar la solicitud");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-28 p-10 bg-gray-900 rounded-lg">
      <h1 className="text-center text-lg font-semibold text-white">Recuperar Contraseña</h1>
      <div className="mb-5">
        <label htmlFor="correo" className="block mb-2 text-sm text-white">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
        Enviar Enlace
      </button>
      {mensaje && <p className="mt-4 text-center text-sm text-red-500">{mensaje}</p>}
    </form>
  );
}
