import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import App from './App';
import Login from './routes/login';
import SignUp from './routes/signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Inventory from './Pages/Dashboard/Layouts/Inventory';
import './index.css'
import './login.css'
import Main from './Pages/Dashboard/Layouts/Main';

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
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
