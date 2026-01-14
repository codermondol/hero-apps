import React from 'react';
import notFoundImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-[1220px] mx-auto text-center my-20 space-y-5 min-h-screen'>
            <img src={notFoundImg} alt="" className='mx-auto'/>
            <h3 className='mt-10 font-bold text-5xl'>Oops, page not found!</h3>
            <p>The page you are looking for is not available.</p>
            <Link to='/' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;