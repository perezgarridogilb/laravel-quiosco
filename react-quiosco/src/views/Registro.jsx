import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    
    /** sin nombre se conoce como fragment en react, pero no nos crea html extra */
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      Registro
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Nombre:</label>
            <input type="text" id="name" className="mt-2 w-full p-3 bg-gray-50" name="name" placeholder="Tu nombre" />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email:</label>
            <input type="email" id="email" className="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Tu email" />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Contraseña:</label>
            <input type="password" id="password" className="mt-2 w-full p-3 bg-gray-50" name="password" placeholder="Tu contraseña" />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">Repetir contraseña:</label>
            <input type="password" id="password_confirmation" className="mt-2 w-full p-3 bg-gray-50" name="password_confirmation" placeholder="Tu contraseña" />

            <input type="submit" value="Crear cuenta" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />

          </div>
        </form>
      </div>

{/*       <nav className="mt-5">
        <a href="/auth/registro">
        ¿Ya tienes cuenta? Inicia Sesión
        </a>
      </nav> */}

      <nav className="mt-5">
        <Link to="/auth/login">
        ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}
