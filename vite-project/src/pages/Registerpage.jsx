import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const [mensaje, setMensaje] = useState(""); // For handling messages
  const [tipoMensaje, setTipoMensaje] = useState(""); // For handling message type (success or error)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await registerRequest(values);
      console.log("Registro exitoso:", res.data);
      setTipoMensaje("success");
      setMensaje("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error al registrar usuario:", error.response?.data?.error || error.message);
      setTipoMensaje("error");
      setMensaje(error.response?.data?.error || "Error al registrar usuario.");
    }
  });

  return (
    <div className="flex items-center justify-center h-[calc(111vh-100px)] p-10 rounded-md bg-red-900 ">
<div className="bg-zinc-800 max-w-md w-full p-10 rounded-xl border-4 border-gray-300">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Registro</h2>
      <form onSubmit={onSubmit}>
          {/* Campo Nombre */}
          <label htmlFor="nombre"></label>
          <input
            type="text"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              minLength: {
                value: 3,
                message: "Nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Nombre solo debe tener máximo 20 caracteres",
              },
            })}
            className="w-full bg-zinc-700 text-white px-5 py-3 rounded-md my-4  "
            placeholder="Nombre"
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}

          {/* Campo Apellido */}
          <label htmlFor="apellido"></label>
          <input
            type="text"
            {...register("apellido", {
              required: {
                value: true,
                message: "Apellido es requerido",
              },
              minLength: {
                value: 3,
                message: "El apellido debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El apellido solo debe tener máximo 20 caracteres",
              },
            })}
            className="w-full bg-zinc-700 text-white px-5 py-3 rounded-md my-4"
            placeholder="Apellido"
          />
          {errors.apellido && <span>{errors.apellido.message}</span>}

          {/* Campo Correo */}
          <label htmlFor="correo"></label>
          <input
            type="email"
            {...register("correo", {
              required: {
                value: true,
                message: "El correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Correo no es válido",
              },
            })}
            className="w-full bg-zinc-700 text-white px-5 py-3 rounded-md my-4"
            placeholder="example@mail.com"
          />
          {errors.correo && <span>{errors.correo.message}</span>}

          {/* Campo Contraseña */}
          <label htmlFor="contraseña"></label>
          <input
            type="password"
            {...register("contraseña", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 5,
                message: "La contraseña debe tener al menos 5 caracteres",
              },
              maxLength: {
                value: 20,
                message: "La contraseña solo puede tener máximo 20 caracteres",
              },
            })}
            className="w-full bg-zinc-700 text-white px-5 py-3 rounded-md my-4"
            placeholder="Contraseña"
          />
          {errors.contraseña && <span>{errors.contraseña.message}</span>}

          {/* Confirmar Contraseña */}
          <label htmlFor="confirmarcontraseña"></label>
          <input
            type="password"
            {...register("confirmarcontraseña", {
              required: {
                value: true,
                message: "Confirma la contraseña",
              },
              validate: (value) =>
                value === watch("contraseña") || "Las contraseñas no coinciden",
            })}
            className="w-full bg-zinc-700 text-white px-5 py-3 rounded-md my-4"
            placeholder="Verificación de contraseña"
          />
          {errors.confirmarcontraseña && <span>{errors.confirmarcontraseña.message}</span>}

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 my-6"
          >
            Registrarme
          </button>

          {mensaje && (
            <p
              className={`text-center text-sm mt-4 ${
                tipoMensaje === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {mensaje}
            </p>
          )}

          <div className="mt-8 text-center">
            <a href="/" className="text-sm text-blue-400 hover:underline mt-4 inline-block">
              Volver al Inicio
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
