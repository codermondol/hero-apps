import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png';
import githubIcon from '../../assets/github.png'


const NavBar = () => {
    const links = <>
        <NavLink to='/'><li className='m-3'>Home</li></NavLink>
        <NavLink to='/apps'><li className='m-3'>Apps</li></NavLink>
        <NavLink to='/installation'><li className='m-3'>Installation</li></NavLink>
    </>
    return (
        <div className='bg-white'>
            <div className="navbar bg-base-100 max-w-[1220px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a href='/' className="text-xl w-[80px] md:ml-4 flex items-center">
                        <img src={logoImg} alt="" className='w-[30px]'/>
                        <span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>Hero.io</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/codermondol' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold"><img src={githubIcon} alt="" /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;