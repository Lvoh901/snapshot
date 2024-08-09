import React from 'react';
import '../App.css';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Instagram from '../images/instagram.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='flex justify-around items-center p-2 fixed w-full z-50 text-[#F4F4F4] bg-[#444C4C]'>
            <h1 className='font-bold cursor-pointer italic'>
                <Link to="/" id='title'>Homologous</Link>
            </h1>

            <div className='flex gap-5 items-center'>
                <Link to="/" className='cursor-pointer uppercase hover:text-gray-400'>Home</Link>
                <Link to="/about" className='cursor-pointer uppercase hover:text-gray-400'>About</Link>
                <Link to="/projects" className='cursor-pointer uppercase hover:text-gray-400'>Projects</Link>
                <Link to="/contact" className='cursor-pointer uppercase hover:text-gray-400'>Contact</Link>
            </div>

            <div className='flex gap-3 items-center'>
                <img src={Facebook} className='w-8 h-8 cursor-pointer' alt='fb'/>
                <img src={Instagram}  className='w-8 h-8 cursor-pointer' alt='ig'/>
                <img src={Youtube}  className='w-8 h-8 cursor-pointer' alt='yt'/>
            </div>
        </div>
    )
}

export default Navigation;