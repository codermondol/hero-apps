import React from 'react';
import appErrorImg from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppErrorPage = () => {
    return (
        <div>
            <div className='max-w-[1220px] mx-auto text-center my-20 space-y-5 min-h-screen'>
                <img src={appErrorImg} alt="" className='mx-auto' />
                <h3 className='mt-10 font-bold text-5xl'>OPPS!! APP NOT FOUND</h3>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/apps' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold'>Go Back!</Link>
            </div>
        </div>
    );
};

export default AppErrorPage;