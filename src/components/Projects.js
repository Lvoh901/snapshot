import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChairImage1 from "../images/img1.jpg";
import ChairImage2 from "../images/img2.jpg";
import ChairImage3 from "../images/img3.jpg";
import Slider from '../assets/Swiper';

const Projects = () => {
  const products = [
    {
      image: ChairImage1,
      title: "Ngong' Hills Drive",
      setting: "Outdoor Drive",
      description: "Scenic nature captures.",
      camera: "Canon EOS M50 Mark II Mirrorless",
      aperture: "F 1.4",
      shutter: "1/3000",
      ISO: "1/3000"
    },
    {
      image: ChairImage2,
      title: "Countryside",
      setting: "Outdoor Shoots",
      description: "Amazing countryside adventures and still shoots.",
      camera: "Canon EOS M6 Mark II Mirrorless Digital Camera",
      aperture: "F 1.8",
      shutter: "1/2000",
      ISO: "1/500"
    },
    {
      image: ChairImage3,
      title: "Random Shoots",
      setting: "Outdoor Shoots",
      description: "Still shoots outdoors",
      camera: "Nikon Z 50 Mirrorless Digital Camera",
      aperture: "F 2.0",
      shutter: "1/800",
      ISO: "1/2000"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for right, 1 for left

  const handleNext = () => {
    setDirection(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  // Animation variants
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    },
    tap: { scale: 0.95 }
  };

  const specItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="mx-auto max-w-7xl pt-16">
      {/* Main Flexbox Container */}
      <div className="flex flex-col lg:flex-row gap-8 pt-12">
        <div className="w-full lg:w-1/2 relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-full h-auto object-cover aspect-video"
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <div className="flex gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 0 : 1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-indigo-600 scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            
            <div className="flex gap-4">
              <motion.button
                onClick={handlePrev}
                className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium border border-indigo-100 shadow-sm flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Prev
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-sm flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        
        <motion.div
          className="w-full lg:w-1/2 px-4 lg:px-0"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          key={`content-${currentIndex}`}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500"
          >
            {currentProduct.title}
          </motion.h1>

          <div className="py-4">
            <motion.h3
              className="text-lg md:text-xl text-gray-500 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentProduct.setting}
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentProduct.description}
            </motion.p>
          </div>

          <motion.p
            className="font-bold text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Specifications:
          </motion.p>

          <motion.div
            className="pt-2 space-y-3"
            initial="hidden"
            animate="visible"
          >
            {[
              `Camera: ${currentProduct.camera}`,
              `Aperture: ${currentProduct.aperture}`,
              `Shutter Speed: ${currentProduct.shutter}`,
              `ISO: ${currentProduct.ISO}`
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={specItemVariants}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-medium shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Book Similar Session
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Section */}
      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Photography Projects
        </h2>

        <Slider />
      </motion.div>
    </div>
  );
};

export default Projects;