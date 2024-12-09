import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";



function RegisterPage() {
  

  
  
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
      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error al registrar usuario:", error.response?.data?.error || error.message);
      alert(error.response?.data?.error || "Error al registrar usuario.");
    }
  });
  return (


    <div className=" flex items-center justify-center h-[calc(100vh-100px)]
            p-10 rounded-md">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded -md">
              <h1 className="">Registra tus datos</h1>
      <form onSubmit={onSubmit}>
        {/* Campo Nombre */}
        <label htmlFor="nombre">Nombre</label>
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
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre"
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}

        {/* Campo Apellido */}
        <label htmlFor="apellido">Apellido</label>
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
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Apellido"
        />
        {errors.apellido && <span>{errors.apellido.message}</span>}

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

        {/* Confirmar Contraseña */}
        <label htmlFor="confirmarcontraseña">Confirmar Contraseña</label>
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
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Verificación de contraseña"
        />
        {errors.confirmarcontraseña && <span>{errors.confirmarcontraseña.message}</span>}

        <button type="submit" className="relative px-4 py-2 font-semibold text-black bg-red-700 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ">
          Registrarse
        </button><br />
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

export default RegisterPage;
