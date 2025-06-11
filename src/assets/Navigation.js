import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Instagram from '../images/instagram.png';
import Icon from '../images/logo.png';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <motion.nav
            className="fixed w-full z-50 bg-[#1A1A1A] text-[#F0F0F0] shadow-lg"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60 }}
        >
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="font-extrabold italic text-xl tracking-wide flex items-center gap-3 cursor-pointer"
                >
                    <img src={Icon} className="w-6 h-6 md:w-8 md:h-8" alt="logo" />
                    <Link to="/">Homologous</Link>
                </motion.div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="space-y-1.5">
                        <motion.span
                            className="block w-6 h-0.5 bg-white"
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white"
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-0.5 bg-white"
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <Link to="/" className="uppercase tracking-wide hover:text-teal-400 transition">Home</Link>
                    <Link to="/gallery" className="uppercase tracking-wide hover:text-teal-400 transition">Gallery</Link>
                    <Link to="/contact" className="uppercase tracking-wide hover:text-teal-400 transition">Contact</Link>

                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/profile.php?id=61555045456071" target="_blank" rel="noreferrer">
                            <img src={Facebook} className="w-6 h-6 hover:opacity-70" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/homologousmedia/" target="_blank" rel="noreferrer">
                            <img src={Instagram} className="w-6 h-6 hover:opacity-70" alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@homologousMedia" target="_blank" rel="noreferrer">
                            <img src={Youtube} className="w-6 h-6 hover:opacity-70" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="lg:hidden flex flex-col gap-4 px-6 pb-4 bg-[#1A1A1A]"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" className="uppercase py-2 hover:text-teal-400" onClick={toggleMenu}>Home</Link>
                        <Link to="/gallery" className="uppercase py-2 hover:text-teal-400" onClick={toggleMenu}>Gallery</Link>
                        <Link to="/contact" className="uppercase py-2 hover:text-teal-400" onClick={toggleMenu}>Contact</Link>

                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/profile.php?id=61555045456071" target="_blank" rel="noreferrer">
                                <img src={Facebook} className="w-6 h-6 hover:opacity-70" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/homologousmedia/" target="_blank" rel="noreferrer">
                                <img src={Instagram} className="w-6 h-6 hover:opacity-70" alt="Instagram" />
                            </a>
                            <a href="https://www.youtube.com/@homologousMedia" target="_blank" rel="noreferrer">
                                <img src={Youtube} className="w-6 h-6 hover:opacity-70" alt="YouTube" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;