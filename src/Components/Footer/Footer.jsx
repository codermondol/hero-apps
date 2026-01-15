import React from 'react';
import logoImg from '../../assets/logo.png'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className=" bg-neutral ">
            <div className='max-w-[1220px] mx-auto text-neutral-content py-10 footer sm:footer-horizontal'>
                <nav>
                    <a href='/' className="text-xl w-[80px] md:ml-4 flex items-center">
                        <img src={logoImg} alt="" className='w-[30px]' />
                        <span className='bg-gradient-to-br from-[#ffffff] to-[#cca8ff] bg-clip-text text-transparent font-bold'>Hero.io</span>
                    </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a href='/' className="link link-hover">Home</a>
                    <a href='/apps' className="link link-hover">Apps</a>
                    <a href='/installation' className="link link-hover">Installed Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">social</h6>
                    <div className='flex items-center gap-5'>
                        <a className="link link-hover"><Facebook></Facebook> </a>
                        <a className="link link-hover"><Twitter></Twitter> </a>
                        <a className="link link-hover"><Linkedin></Linkedin></a>
                        <a className="link link-hover"><Youtube></Youtube></a>
                    </div>
                </nav>
            </div>
            <div className='border-t-2 border-gray-200'></div>
            <p className='text-gray-100 text-center py-5'>&copy; 2025 Hero Apps - All Right Reserved </p>
        </footer>
    );
};

export default Footer;