import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
     const {state}=useNavigate()
    return (
        <div className=''>
            <Header></Header>
            <div className='min-h-[calc(100vh-120px)] max-w-11/12 mx-auto'>
                {state=='loading'?<Loading></Loading>:<Outlet/>} 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;