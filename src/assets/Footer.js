import React from 'react';

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
                    <h1 className="text-3xl lg:text-5xl" id="hero_name">Homologous.</h1>
                    <p className='pt-3'>I capture memories that define events, life stages, and nature to bring a new perspective of everyday life.</p>
                    <p>+254-712-345-678</p>
                    <p className='py-4'>email@test.com</p>
                </div>
            </div>

            <div className='bg-gray-300 py-4 px-12'>
                <small>&#64; Homologous || <strong>{getCurrentYearAndMonth()}</strong>. All Rights Reserved</small>
            </div>
        </div>
    );
}

export default Footer;