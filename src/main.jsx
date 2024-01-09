import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Inventory from "./Pages/Dashboard/Layouts/Inventory";
import "./index.css";
import "./login.css";
import Main from "./Pages/Dashboard/Layouts/Main";
import Kyc from "./Pages/Dashboard/Layouts/Kyc";
import Invest from "./Pages/Dashboard/Layouts/Invest";
import Transactions from "./Pages/Dashboard/Layouts/Transactions";
import Profile from "./Pages/Dashboard/Layouts/Profile/Profile";
import EmailVerify from "./routes/email-verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/verify-email",
    element: <EmailVerify />,
  },
  {
    path: "/partner/",
    element: <Dashboard />,
    children: [
      {
        path: "user",
        element: <Main />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "kyc",
        element: <Kyc />,
      },
      {
        path: "invest",
        element: <Invest />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
