import { Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import PrivateComponent from "../components/PrivateComponent/PrivateComponent";
import ProductPage from "../pages/Product";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to="/admin/product" replace />,
      },
      {
        path: "product",
        element: <PrivateComponent component={ProductPage} />,
      },
      {
        path: "category",
        element: <PrivateComponent component={() => <h1>abc</h1>} />,
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
