import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home/index";
import LoginPage from "./pages/login/index";
import RegisterPage from "./pages/register/index";
import MyAccountPage from "./pages/my-account/index";
import TermsOfUsePage from "./pages/terms-of-use";
import PrivacyPolicyPage from "./pages/privacy-policy";
import CookiesPage from "./pages/cookies";
import AboutUsPage from "./pages/about-us";

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
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/my-account",
    element: <MyAccountPage />,
  },
  
  {
    path: "/terms-of-use",
    element: <TermsOfUsePage />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />
  },
  {
    path: "/cookies",
    element: <CookiesPage />
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
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
