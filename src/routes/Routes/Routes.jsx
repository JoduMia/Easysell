import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Login from "../../pages/Login/Login";
import POS from "../../pages/POS/POS";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/pos',
                element: <POS/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);