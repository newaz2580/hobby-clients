import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ContextProvider from './Context/ContextProvider.jsx';
import CreateGroup from './Pages/CreateGroup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home,
        loader:()=>fetch('http://localhost:3000/hobby'),
        hydrateFallbackElement:<p>Loading.....</p>
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/signup',
        Component:SignUp
      },
      {
        path:'/createGroup',
        element:<CreateGroup></CreateGroup>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
       
      <ContextProvider>
      <RouterProvider router={router} />
      </ContextProvider>
    
  </StrictMode>,
)
