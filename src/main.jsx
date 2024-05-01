import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./routes/Error/Error.jsx";
import Home from "./routes/Home/Home.jsx";
import Products from "./routes/Products/Products.jsx";
import Login from "./routes/Login/Login.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import GlobalStyled from "./GlobalStyled.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products", element: <Products /> },
      { path: "/login", element: <Login /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
