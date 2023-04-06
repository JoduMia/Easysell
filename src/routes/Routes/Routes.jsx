import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../pages/Login/Login";
import POS from "../../pages/POS/POS";
import ManageProducts from "../../pages/ManageProducts/ManageProducts";
import Dashboard from "../../pages/Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/pos',
                element: <POS/>
            },
            {
                path: '/manage-products',
                element: <ManageProducts/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);