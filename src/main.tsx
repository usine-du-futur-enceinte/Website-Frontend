import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authpage from "./pages/Authpage";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth",
    element: <Authpage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
