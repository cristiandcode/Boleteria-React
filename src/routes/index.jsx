import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import Profile from "../pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
  {
        path: "/profile",
        element: <Profile />,
        children: [
        {
            path: "my-info",
            element: <div>My info</div>,
      },    
         { 
            path: 'like-events',
            element: <div>Like events</div>
      },
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
