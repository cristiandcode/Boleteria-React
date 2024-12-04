import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../pages/Home";
import Detail from "../pages/Detail";


const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
    },
    {
        path: '/detail',
        element: <Detail/>
    }
])

const MyRoutes = () =>{
    return(
        <RouterProvider router={router}/>
    )
};

export default MyRoutes