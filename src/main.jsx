import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard.jsx";
import { Clients } from "./pages/Clients.jsx";
import { CreateInvoice } from "./pages/CreateInvoice.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Clients",
        element: <Clients />,
      },
      {
        path: "/create-invoice",
        element: <CreateInvoice />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
);
