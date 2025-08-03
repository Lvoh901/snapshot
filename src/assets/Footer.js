import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../images/logo.png';
import { MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
    // Function to get the current year and month
    const getCurrentYearAndMonth = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${year}`;
    };

    return (
        <footer className="bg-secondary text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                    {/* Brand and Logo */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link to="/" className="flex items-center gap-2 mb-2">
                            <img src={Icon} className="w-10 h-10" alt="icon" />
                            <span className="font-display font-bold">Homologous</span>
                        </Link>
                        <p className="text-center md:text-left max-w-xs font-light">
                            Capturing moments, telling stories. Professional photography for every occasion.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 items-center md:items-end">
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="w-6 h-6"/>
                            <a href="tel:+254712345678" className="hover:underline text-base">+254-712-345-678</a>
                        </div>

                        <div className="flex items-center gap-2">
                            <MailIcon className="w-6 h-6"/>
                            <a href="mailto:email@test.com" className="hover:underline text-base">email@test.com</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>
                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <nav className="flex gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-[#FCBA04] transition">Home</Link>
                        <Link to="/gallery" className="hover:text-[#FCBA04] transition">Gallery</Link>
                        <Link to="/contact" className="hover:text-[#FCBA04] transition">Contact</Link>
                    </nav>
                    <small className="text-neutral text-xs text-center md:text-right">
                        &copy; Homologous | <strong>{getCurrentYearAndMonth()}</strong>. All Rights Reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;