import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./routes/Error/Error.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import GlobalStyled from "./GlobalStyled.jsx";
import ListProducts from "./routes/ListProducts/ListProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ListProducts /> },
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
