import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { FourSquare } from 'react-loading-indicators';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading' || navigation.state === 'Submitting'
    const loaderStyle = {
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.6)",
        zIndex: 9999,
    };

    return (
        <div>
            <NavBar></NavBar>
            {
                isLoading && (
                    <div style={loaderStyle}>
                        <FourSquare color="#32cd32"
                            size="medium"
                            text=""
                            textColor=""
                        ></FourSquare>
                    </div>
                )
            }

            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>

    );
};

export default Root;