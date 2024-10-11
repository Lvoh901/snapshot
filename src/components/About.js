import React from 'react';
import Char from '../images/character.png';

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="py-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-8">
      {/* Character Image */}
      <img
        src={Char}
        alt="character"
        className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4"
        style={{ width: "calc(18em + 5vw)" }}
      />

      {/* About Content */}
      <div className="text-center lg:text-left">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-1 p-2">
          <p className="text-sm md:text-base text-gray-600">About</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" id="hero_name">Joseph</h1>
        </div>

        {/* Description Section */}
        <div className="space-y-4 py-4 text-gray-800">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            I am a passionate photographer dedicated to capturing life’s most precious moments. Specializing in weddings, portraits, and events, I transform your memories into timeless visual stories that you’ll cherish forever.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            With a keen eye for detail and a creative touch, I ensure every shot is perfect. Let me bring your vision to life and create stunning images that reflect your unique story. Book your session today and experience the magic of professional photography!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;