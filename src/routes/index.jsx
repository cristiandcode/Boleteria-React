import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import {createBrowserRouter, RouterProvider} from "react-router-dom"



const router = createBrowserRouter([{
    path: '/',
    element: <Home/>,
    errorElement: <Error404/>
    },
    {
        path: '/detail/:eventId',
        element: <Detail/>
    }
])

const MyRoutes = () =>{
    return(
        <RouterProvider router={router}/>
    )
};

export default MyRoutes