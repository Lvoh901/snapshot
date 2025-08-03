import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

const navLinks = [
    { to: '/gallery', label: 'gallery' },
    { to: '/contact', label: 'contact' },
];

const socialLinks = [
    {
        href: 'https://www.facebook.com/profile.php?id=61555045456071',
        img: '/facebook.png',
        alt: 'Facebook',
        tooltip: 'Joseph Omollo',
    },
    {
        href: 'https://www.instagram.com/homologousmedia/',
        img: '/instagram.png',
        alt: 'Instagram',
        tooltip: 'Homologous Media',
    },
    {
        href: 'https://www.youtube.com/@homologousMedia',
        img: '/youtube.png',
        alt: 'YouTube',
        tooltip: 'Homologous Media',
    },
];

const navVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
};

const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, type: 'spring', stiffness: 100, damping: 12 },
    }),
};

const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    React.useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="z-50 fixed w-full bg-gray-800 pb-5">
            {/* Top Navigation Bar */}
            <motion.section
                className="flex items-center justify-between pt-4 pb-1 container mx-auto px-4 md:px-8"
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                {/* Desktop: All items in one line */}
                <div className="hidden md:flex w-full items-center justify-between">
                    {/* Left: Nav Links */}
                    <div className="flex gap-5">
                        {navLinks.map((link, i) => (
                            <motion.div key={link.to} custom={i} initial="hidden" animate="visible" variants={linkVariants}>
                                <Link
                                    to={link.to}
                                    className="uppercase font-light hover:font-medium small transition-colors duration-200 px-2 py-1 rounded hover:underline text-gray-100"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center: Logo */}
                    <div className="flex flex-col items-center justify-center">
                        <a href='/' className='font-light hover:text-[#ffd800]'><img src="/logo.png" className="w-12 h-auto" alt="Logo" /></a>
                    </div>
                    {/* Right: Social Icons */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => (
                            <motion.div key={social.href} custom={i} initial="hidden" animate="visible" variants={linkVariants}>
                                <Tooltip title={social.tooltip} position="bottom" trigger="mouseenter">
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <img src={social.img} alt={social.alt} className="w-8 h-8" />
                                    </a>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center w-full justify-between">
                    {/* Logo (mobile) */}
                    <div className="flex flex-col items-center justify-center">
                        <a href='/' className='font-light hover:text-[#ffd800]'><img src="/logo.png" className="w-16 h-auto" alt="Logo" /></a>
                    </div>

                    <button
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(true)}
                        className="focus:outline-none"
                    >
                        <Menu className="w-7 h-7 text-white" />
                    </button>
                </div>
            </motion.section>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="fixed inset-0 bg-black/60 flex flex-col items-end md:hidden z-50"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="bg-white w-3/4 max-w-xs h-full shadow-lg flex flex-col py-8 px-6 relative">
                            <button
                                aria-label="Close menu"
                                onClick={() => setMenuOpen(false)}
                                className="absolute top-4 right-4 focus:outline-none"
                            >
                                <X className="w-7 h-7 text-primary" />
                            </button>
                            <div className="flex flex-col gap-6 mt-10">
                                {navLinks.map((link, i) => (
                                    <motion.div key={link.to} custom={i} initial="hidden" animate="visible" variants={linkVariants}>
                                        <Link
                                            to={link.to}
                                            className="uppercase font-light hover:font-medium text-lg py-2 px-2 rounded hover:bg-accent/30 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex gap-5 mt-10">
                                {socialLinks.map((social, i) => (
                                    <Tooltip key={social.href} title={social.tooltip} position="bottom" trigger="mouseenter" arrow={true}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-transform hover:scale-110"
                                        >
                                            <img src={social.img} alt={social.alt} className="w-8 h-8" />
                                        </a>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                        {/* Click outside to close */}
                        <div className="flex-1 w-full" onClick={() => setMenuOpen(false)} />
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navigation;