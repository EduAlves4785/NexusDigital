import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'

import {Home} from './pages/Home/index.jsx'

import './index.css'
import { Sobre } from './pages/Sobre/index.jsx';
import { Portfolio } from './pages/Portfolio/index.jsx';

const router = createBrowserRouter([
  {
    path: "/NexusDigital",
    element: <Home/>,
  },
  {
    path: "/NexusDigital/sobre",
    element: <Sobre/>,
  },
  {
    path: "/NexusDigital/portfolio",
    element: <Portfolio/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
