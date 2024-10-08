import React from 'react';
import Char from '../images/character.png';

const About = () => {
  return (
    <div className="py-20 px-12 flex flex-col lg:flex-row justify-center items-center gap-3">
      <img src={Char} style={{ width: "calc(18em + 5vw)" }} alt='character' className="" />

      <div className="">
        <div className='flex gap-1 p-2'>
          <p className=''>About</p>
          <h1 className='text-5xl sm:text-3xl lg:text-7xl font-bold' id="hero_name">Joseph</h1>
        </div>

        <div className='space-y-4 py-4'>
          <p>I am a passionate photographer dedicated to capturing life’s most precious moments. Specializing in weddings, portraits, and events, I transform your memories into timeless visual stories that you’ll cherish forever.</p>

          <p>With a keen eye for detail and a creative touch, I ensure every shot is perfect. Let me bring your vision to life and create stunning images that reflect your unique story. Book your session today and experience the magic of professional photography!</p>
        </div>
      </div>
    </div>
  )
}

export default About;