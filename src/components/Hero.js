import React from 'react';
import { motion } from 'framer-motion';
import scrollToSection from '../assets/ScrollTo';

// images
import Arrow from '../images/arrow_down.png';
import Img1 from '../images/gallery.jpg';
import Img2 from '../images/gallery5.jpg';
import Img3 from '../images/gallery2.jpg';
import Img4 from '../images/gallery3.jpg';
import Img5 from '../images/gallery4.jpg';
import Img6 from '../images/gallery6.jpg';

const Hero = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <div className="text-[#F4F4F4] text-center flex flex-col justify-center items-center relative" id="hero" style={{ width: "100%", height: "80vh" }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"></div>
        <div className="leading-5 py-8 relative">
          <p className="text-xl md:text-2xl lg:text-3xl">Hi, I'm</p>
          <h1 className="text-5xl lg:text-8xl font-bold" id="hero_name">Joseph.</h1>
          <p className='pt-4 text-xl md:text-2xl'>Photographer, GIS Analyst, Biker</p>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative"
          variants={itemVariants}
        >
          <motion.button
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Session
          </motion.button>

          <motion.button
            className="px-6 py-3 border border-indigo-600 text-white rounded-full font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Offer Section */}
      <div className="bg-yellow-300">
        <div className='flex flex-col justify-center items-center py-4 gap-3 lg:gap-5'>
          <button onClick={() => scrollToSection("services")}>
            <img src={Arrow} alt='arrow' className='animate-bounce w-8 h-8' />
          </button>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold' id='hero_name'>My Service Package</h1>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4" id='services'>
          {[
            { img: Img1, title: "Branding", description: "Product Photography" },
            { img: Img2, title: "Wedding", description: "Photography/ Videography" },
            { img: Img3, title: "Video Editing", description: "Video Shoot/ Production" },
            { img: Img4, title: "Live Video", description: "Video Broadcasting" },
            { img: Img5, title: "Photo Editing", description: "Adobe Suite Production" },
            { img: Img6, title: "Photography", description: "Nature Photography" }
          ].map((item, index) => (
            <div key={index} className="relative cursor-pointer overflow-hidden">
              <img src={item.img} alt={`Gallery ${index + 1}`} className="w-full h-56 md:h-64 lg:h-72 object-cover transition duration-500 ease-in-out transform hover:scale-105" />
              <div className="absolute inset-0 bg-black/15 hover:bg-black/75 flex flex-col justify-center items-center text-white transition-all duration-300">
                <h1 className="text-xl sm:text-2xl lg:text-3xl italic font-semibold">{item.title}</h1>
                <p className="text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="p-8 md:p-16 flex flex-col justify-center items-center text-center bg-gray-100 space-y-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" id="hero_name">Let's Work Together</h1>
        <p className="text-base sm:text-lg md:text-xl">I am open to new and ongoing projects. I have three days open in the coming week for new projects. Leave your details for a response.</p>

        {/* Contact Form */}
        <form className="w-full max-w-lg">
          <div className="flex flex-col space-y-8">
            {/* Email Input */}
            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
              </span>
            </label>

            {/* Name Input */}
            <label
              htmlFor="UserName"
              className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="UserName"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Name
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="group relative inline-block focus:outline-none focus:ring mt-8" href="/">
            <span
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
            >
              Submit
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;