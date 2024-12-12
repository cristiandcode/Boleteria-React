import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Error404 from "../pages/Error404";
import ErrorBoundary from "../components/ErrorBoundary";

import Profile from "../pages/Profile";
import LikedEvents from "../pages/Profile/components/LikedEvents";
import MyInfo from "../pages/Profile/components/MyInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <ErrorBoundary
          fallback={<div>Ha ocurrido un error al obtener el detalle</div>}
        >
          <Detail />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
