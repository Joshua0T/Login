import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import React from "react";

function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]
                ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded -md">

        <h1 className=" text-2xl font-bold">Login</h1>
      
      <form onSubmit={onSubmit}>
        {/* Campo Nombre */}
       

        {/* Campo Correo */}
        <label htmlFor="correo">Correo</label>
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
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          placeholder="example@mail.com"
        />
        {errors.correo && <span>{errors.correo.message}</span>}

        {/* Campo Contraseña */}
        <label htmlFor="contraseña">Contraseña</label>
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
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        {errors.contraseña && <span>{errors.contraseña.message}</span>}

      

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          ingresar
        </button>
        <a
          href="/"
          className="text-center text-sm font-semibold text-decoration-line: underline"
        >
          Volver al Inicio
        </a>
      </form>
      </div>

    </div>
  );
}

export default Loginpage;
