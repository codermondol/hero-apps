import React from 'react';
import googlePlayStoreIcon from '../../assets/googleplaystore.png'
import appleStoreIcon from '../../assets/applestoreicon.png'
import heroImg from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center w-6/12 mx-auto space-y-10 justify-center'>
            <div className='space-y-5'>
                <h1 className='text-6xl font-bold mt-20'>We Build <br /><span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-10 justify-center'>
                    <Link to='https://play.google.com/store/games?hl=en'><button className='flex items-center gap-4 text-xl font-bold btn border-gray-200 py-7 rounded hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]
  hover:text-white'> <img src={googlePlayStoreIcon} alt="" /> <span>Google Play</span></button></Link>
                    <Link to='https://www.apple.com/app-store/'><button className='flex items-center gap-4 text-xl font-bold btn border-gray-200 py-7 rounded hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]
  hover:text-white'> <img src={appleStoreIcon} alt="" /> <span>Apple Store</span></button></Link>
                </div>
            </div>
            <img src={heroImg} alt="" className='mx-auto'/>
        </div>
    );
};

export default Banner;