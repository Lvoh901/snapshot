import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Instagram from '../images/instagram.png';
import Icon from '../images/logo.png';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed w-full z-50 bg-[#444C4C] text-[#F4F4F4]">
            <div className="flex justify-between items-center p-3">
                <h1 className="font-bold cursor-pointer italic flex items-center gap-2">
                    <img src={Icon} className=' w-4 h-4 lg:w-8 lg:h-8' alt='icon' />
                    <Link to="/" id="title">Homologous</Link>
                </h1>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>
                </div>

                <div className="hidden lg:flex gap-5 items-center">
                    <Link to="/" className="cursor-pointer uppercase hover:text-gray-400">Home</Link>
                    {/* <Link to="/about" className="cursor-pointer uppercase hover:text-gray-400">About</Link> */}
                    {/* <Link to="/projects" className="cursor-pointer uppercase hover:text-gray-400">Projects</Link> */}
                    <Link to="/gallery" className="cursor-pointer uppercase hover:text-gray-400">Gallery</Link>
                    <Link to="/contact" className="cursor-pointer uppercase hover:text-gray-400">Contact</Link>
                </div>

                <div className="hidden lg:flex gap-3 items-center">
                    <Link to='https://www.facebook.com/profile.php?id=61555045456071' target='_blank'><img src={Facebook} className="w-8 h-8 cursor-pointer" alt="fb" /></Link>

                    <Link to='https://www.instagram.com/homologousmedia/' target='_blank'><img src={Instagram} className="w-8 h-8 cursor-pointer" alt="ig" /></Link>

                    <Link to='https://www.youtube.com/@homologousMedia' target='_blank'><img src={Youtube} className="w-8 h-8 cursor-pointer" alt="yt" /></Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col lg:hidden bg-[#444C4C] pl-8">
                    <Link to="/" className="cursor-pointer uppercase hover:text-gray-400 py-2" onClick={toggleMenu}>Home</Link>
                    {/* <Link to="/about" className="cursor-pointer uppercase hover:text-gray-400 py-2" onClick={toggleMenu}>About</Link> */}
                    {/* <Link to="/projects" className="cursor-pointer uppercase hover:text-gray-400 py-2" onClick={toggleMenu}>Projects</Link> */}
                    <Link to="/gallery" className="cursor-pointer uppercase hover:text-gray-400 py-2" onClick={toggleMenu}>Gallery</Link>
                    <Link to="/contact" className="cursor-pointer uppercase hover:text-gray-400 py-2" onClick={toggleMenu}>Contact</Link>

                    <div className="flex gap-3 items-center py-2">
                        <Link to='https://www.facebook.com/profile.php?id=61555045456071' target='_blank'><img src={Facebook} className="w-8 h-8 cursor-pointer" alt="fb" /></Link>

                        <Link to='https://www.instagram.com/homologousmedia/' target='_blank'><img src={Instagram} className="w-8 h-8 cursor-pointer" alt="ig" /></Link>

                        <Link to='https://www.youtube.com/@homologousMedia' target='_blank'><img src={Youtube} className="w-8 h-8 cursor-pointer" alt="yt" /></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;