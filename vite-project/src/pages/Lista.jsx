"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Lista() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para cargar los usuarios desde el backend
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");  // Obtener el token del almacenamiento local
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,  // Enviar el token en los headers
        },
      });

      // Validación de la respuesta
      if (response.data && Array.isArray(response.data)) {
        setUsers(response.data); // Actualiza el estado con la lista de usuarios
      } else {
        setError("No se encontraron usuarios.");
      }
    } catch (error) {
      console.error("Error al cargar los usuarios:", error.message);
      // Mostrar error detallado si está disponible en la respuesta
      setError(`Hubo un error al cargar los usuarios: ${error.response ? error.response.data.error : error.message}`);
    } finally {
      setLoading(false); // Termina el estado de carga
    }
  };

  // Cargar usuarios cuando el componente se monta
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-zinc-800">
        <h2 className="text-xl font-semibold">Lista de Usuarios</h2>
      </div>
      {error && <p className="text-red-500">{error}</p>} {/* Mostrar el error si ocurre */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Nombre</th>
            <th scope="col" className="px-6 py-3">Correo</th>
            <th scope="col" className="px-6 py-3">Estado</th>
            <th scope="col" className="px-6 py-3">Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700 hover:bg-gray-600 dark:hover:bg-zinc-800"
              >
                <td className="px-6 py-4">{user.nombre}</td>
                <td className="px-6 py-4">{user.correo}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full me-2 ${
                        user.activo ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>{" "}
                    {user.activo ? "En Línea" : "Desconectado"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Editar Usuario
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No hay usuarios disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}