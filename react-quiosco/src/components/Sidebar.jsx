import Categoria from "./Categoria";
import { categorias } from "../data/categorias"

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="w-40" alt="" src="img/logo.svg" />
      </div>

      {/* implicito, paréntesis de react */}
      <div className="mt-10">
        {/*         
        {categorias.map( categoria => (
            <p>{categoria.nombre}</p>
        ))} */}

        {/* explicito */}

        {categorias.map(categoria => {
            // Por cada objeto 'categoria' en el array 'categorias',
            // realiza lo siguiente:
            
            // 1. Extraer el valor de la propiedad 'nombre' del objeto 'categoria'.
            // const nombreCategoria = categoria.nombre;
            
            // 2. Crear un elemento <p> y colocar el nombre de la categoría dentro de él.
            // return <p>{nombreCategoria}</p>;
            return <Categoria categoria={categoria} />;
          })}
      </div>
      
      <div className="my-4 px-5">
        <button className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
          Cancelar Orden
        </button>
      </div>
    </aside>
  )
}
