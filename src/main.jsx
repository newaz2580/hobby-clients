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
import HobbyDetails from './Pages/HobbyDetails.jsx';
import AllGroup from './Pages/AllGroup.jsx';
import MyGroup from './Pages/MyGroup.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Update from './Pages/Update.jsx';
import { ToastContainer } from 'react-toastify';
import Loading from './Pages/Loading.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoutes><CreateGroup></CreateGroup></PrivateRoutes>
      },
      {
        path:'/hobbyDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/hobby/${params.id}`),
        element:<PrivateRoutes><HobbyDetails></HobbyDetails></PrivateRoutes>,
         hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'/allGroup',
        loader:()=>fetch('http://localhost:3000/hobby'),
        element:<AllGroup></AllGroup>,
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'/group',
        element:<PrivateRoutes><MyGroup></MyGroup></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/hobby'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:3000/hobby/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>

      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
       
      <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
      </ContextProvider>
    
  </StrictMode>,
)
