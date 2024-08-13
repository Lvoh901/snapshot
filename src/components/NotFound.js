import React from 'react'
import { Link } from 'react-router-dom';
import Error from '../images/confused.gif';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center space-y-4'>
            <img src={Error} className='w-52 h-52 lg:w-56 lg:h-56'/>
            <h1 className='text-3xl lg:text-6xl'>Not Found | <span className='font-bold italic text-yellow-300 underline underline-offset-4'>404</span></h1>

            <div className='text-center'>
                <p className='py-4'>Seems you have been directed to a non-existing location.</p>
                <Link to='/' className='py-2 px-3 bg-blue-400 border border-black text-white hover:font-bold'>Back Home</Link>
            </div>
        </div>
    )
}

export default NotFound;