import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

/** Hubo preferencia por acomodar en orden:
 *  Dependencias, o hubs de react, componentes, después funciones y finalmente hojas de estilo en css */

export default function Layout() {
  return (
    /**
     * izquierda a derecha en un tamaño mediano: 'md:flex'
     */
    <div className='md:flex'>
      <Sidebar />
      <main className='flex-1'>
      <Outlet />
      </main>
      

      <Resumen />
      </div>
  )
}
