import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../images/logo.png';
import Phone from '../images/phone.png';
import Mail from '../images/mail.png';

const Footer = () => {
    // Function to get the current year and month
    const getCurrentYearAndMonth = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${year}`;
    };

    return (
        <div>
            <div className='bg-gray-200 py-8 px-12'>
                <div className='flex flex-col'>
                    <h1 className="text-2xl py-4 flex items-center gap-2" id="hero_name">
                        <img src={Icon} className='w-8 h-8' />
                        <Link to="/" id="title">Homologous</Link>
                    </h1>
                    <p className='flex gap-2 items-center italic'><img src={Phone} className='w-8 h-8' alt='mobile' />  +254-712-345-678</p>
                    <p className='py-4 flex gap-2 items-center italic'><img src={Mail} className='w-8 h-8' alt='email' />  email@test.com</p>
                </div>
            </div>

            <div className='bg-gray-300 py-4 px-12'>
                <small>&#64; Homologous || <strong>{getCurrentYearAndMonth()}</strong>. All Rights Reserved</small>
            </div>
        </div>
    );
}

export default Footer;