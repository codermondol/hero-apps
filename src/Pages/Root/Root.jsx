import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;