import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home/index";
import LoginPage from "./pages/login/index";
import RegisterPage from "./pages/register/index";

import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registro",
    element: <RegisterPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <Header />
      <div className="app__content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
