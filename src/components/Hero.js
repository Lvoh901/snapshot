import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Carousel images (replace with your own images)
const carouselImages = [
  {
    src: '/gallery/gallery.jpg',
    alt: 'Outdoor Portrait',
  },
  {
    src: '/gallery/gallery1.jpg',
    alt: 'Wedding Photography',
  },
  {
    src: '/gallery/gallery2.jpg',
    alt: 'Studio Session',
  },
  {
    src: '/gallery/gallery3.jpg',
    alt: 'Studio Session',
  },
  {
    src: '/gallery/gallery4.jpg',
    alt: 'Studio Session',
  },
  {
    src: '/gallery/gallery5.jpg',
    alt: 'Studio Session',
  },
  {
    src: '/gallery/gallery6.jpg',
    alt: 'Studio Session',
  },
];

// Services offered (replace with your own images and captions)
const services = [
  {
    img: '/services/potrait.jpg',
    title: 'Portrait Photography',
    desc: 'Capturing your best moments with creative portrait sessions.',
  },
  {
    img: '/services/event.jpeg',
    title: 'Event Coverage',
    desc: 'Professional coverage for weddings, parties, and corporate events.',
  },
  {
    img: '/services/product.jpg',
    title: 'Product Photography',
    desc: 'Showcase your products with high-quality, detailed images.',
  },
  {
    img: '/services/nature.png',
    title: 'Nature Photography',
    desc: 'Expert retouching and editing to make your photos stand out.',
  },
  {
    img: '/services/editing.jpg',
    title: 'Photo Editing',
    desc: 'Expert retouching and editing to make your photos stand out.',
  },
];

const Hero = () => {
  // Carousel state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Carousel Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {carouselImages.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionProperty: 'opacity' }}
            draggable={false}
          />
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-6 h-2 ${idx === current ? 'bg-accent' : 'bg-neutral/60'} border border-white`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <section className='bg-gray-300 py-24'>
        <div className="container mx-auto px-8 lg:px-4 flex flex-col items-center text-center">
          <h1 className="mb-4">Hi, I'm Joseph Omollo</h1>
          <p className="max-w-2xl mb-6 text-secondary font-light">
            I am a passionate photographer dedicated to capturing life's most beautiful moments. Whether it's a portrait, an event, or a creative project, I strive to tell your story through my lens.
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 border border-[#000000] rounded shadow hover:bg-yellow-400 transition-colors"
          >
            View My Projects
          </Link>
        </div>
      </section>

      {/* values */}
      <section className="max-w-5xl mx-auto px-4 py-16 flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-12">
        {/* what i do */}
        <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full lg:h-[500px] w-full lg:w-1/2">
          <div className="w-full h-72 flex-shrink-0">
            <img
              src='/moments.jpeg'
              className='w-full h-full object-cover object-top group-hover:brightness-90 transition duration-300'
              alt="Capturing Moments"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
          <div className='flex flex-col flex-1 px-8 pb-7'>
            <p className='uppercase font-light text-gray-500 pt-5'>what i do</p>
            <h2 className='capitalize mb-2'>capture unforgettable moments</h2>
            <p className="text-gray-600 font-light">
              I capture meaningful moments—smiles, embraces, and events—creating images that evoke emotion and preserve your cherished memories.
            </p>
          </div>
        </div>

        {/* how i work */}
        <div className='group bg-gray-300 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col h-full lg:h-[500px] w-full lg:w-1/2'>
          <div className="w-full h-72 flex-shrink-0">
            <img
              src='/professional.jpg'
              className='w-full h-full object-cover object-top group-hover:brightness-90 transition duration-300'
              alt="Professionalism and Empathy"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>

          <div className='flex flex-col flex-1 px-8 pb-7'>
            <p className='uppercase font-light text-gray-500 pt-5'>how i work</p>
            <h2 className='capitalize mb-2'>professionalism & empathy</h2>
            <p className="text-gray-700 font-light">
              I work with professionalism and empathy—listening, respecting your vision, and ensuring a comfortable, collaborative experience throughout.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className='bg-yellow-400 py-28'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1>Explore Some Amazing Captures</h1>
          <motion.a
            href='/gallery'
            className='bg-gray-800 text-white px-4 py-2 hover:rounded-full transition-shadow'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
            transition={{ type: "spring", stiffness: 300, damping: 18, duration: 0.3 }}
          >
            Gallery
          </motion.a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center">Services I Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover rounded-t-md"
                draggable={false}
              />

              <div className='p-4 text-center'>
                <h4 className="text-lg font-semibold mb-2 text-primary">{service.title}</h4>
                <p className="text-gray-500 font-light text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;