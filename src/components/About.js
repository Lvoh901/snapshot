import React from 'react';
import { motion } from 'framer-motion';
import Char from '../images/character.png';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 0.2
      }
    },
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="py-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-12 max-w-7xl">
        {/* Character Image with animation */}
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative"
        >
          <img
            src={Char}
            alt="character"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-xl"
            style={{ width: "calc(18em + 5vw)" }}
          />
          <motion.div
            className="absolute -bottom-5 -right-5 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            <span className="text-sm font-medium">📸 Photographer</span>
          </motion.div>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="text-center lg:text-left max-w-2xl"
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 p-2"
            variants={itemVariants}
          >
            <motion.p
              className="text-sm md:text-base text-indigo-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500"
              id="hero_name"
              whileHover={{ scale: 1.02 }}
            >
              Joseph
            </motion.h1>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="space-y-6 py-4 text-gray-800"
            variants={itemVariants}
          >
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              variants={itemVariants}
            >
              I am a passionate photographer dedicated to capturing life's most precious moments. Specializing in weddings, portraits, and events, I transform your memories into timeless visual stories that you'll cherish forever.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              variants={itemVariants}
            >
              With a keen eye for detail and a creative touch, I ensure every shot is perfect. Let me bring your vision to life and create stunning images that reflect your unique story.
            </motion.p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;