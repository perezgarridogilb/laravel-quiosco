import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";

const router = createBrowserRouter([
    {
        /** página principal */
        path: '/',
        /** componente de react cuando visite esa página principal */
        /** un layout es para reutilizar */
        element: <Layout />,
        /** los que estén aquí definidos como sus hijos van a utilizar este layout */
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        /** página principal */
        path: '/auth',
        /** componente de react cuando visite esa página principal */
        /** un layout es para reutilizar */
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                /* index: true, */
                element: <Login />
            },
            {
                path: '/auth/registro',
                /* index: true, */
                element: <Registro />
            }
        ]  
    }

])

export default router

