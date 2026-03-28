import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const carouselImages = [
  { src: '/gallery/gallery.jpg', alt: 'Outdoor Portrait' },
  { src: '/gallery/gallery1.jpg', alt: 'Wedding Photography' },
  { src: '/gallery/gallery2.jpg', alt: 'Studio Session' },
  { src: '/gallery/gallery3.jpg', alt: 'Studio Session' },
  { src: '/gallery/gallery4.jpg', alt: 'Studio Session' },
  { src: '/gallery/gallery5.jpg', alt: 'Studio Session' },
  { src: '/gallery/gallery6.jpg', alt: 'Studio Session' },
];

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
    desc: 'Breathtaking moments frozen in time amidst natural landscapes.',
  },
  {
    img: '/services/editing.jpg',
    title: 'Photo Editing',
    desc: 'Expert retouching and color grading to make your photos stand out.',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-background text-primary">
      {/* 1. Immersive Hero Landing */}
      <section className="relative w-full h-screen overflow-hidden">
        {carouselImages.map((img, idx) => (
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            animate={{ scale: idx === current ? 1 : 1.05 }}
            transition={{ duration: 6, ease: 'linear' }}
            draggable={false}
          />
        ))}
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/95 via-primary/30 to-black/60 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end pb-24 sm:pb-32 container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Joseph Omollo</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-display leading-tight mb-6 drop-shadow-xl">
              Capturing Life's Most <span className="italic font-medium">Beautiful Moments</span>
            </h1>
            <p className="text-white text-lg md:text-xl font-medium mb-8 max-w-2xl leading-relaxed">
              Passionate photographer dedicated to preserving your memories. Whether it's a portrait, an event, or a creative project, I tell your unique story through my lens.
            </p>
            <Link
              to="/gallery"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-accent px-8 py-4 font-bold tracking-widest uppercase text-xs text-primary transition-all duration-300 shadow-[0_0_20px_rgba(236,201,75,0.4)] hover:shadow-[0_0_30px_rgba(236,201,75,0.6)]"
            >
              <span className="absolute inset-0 bg-white transition-transform duration-300 translate-y-full group-hover:translate-y-0 ease-in-out"></span>
              <span className="relative group-hover:text-primary">Explore Collection</span>
            </Link>
          </motion.div>
        </div>

        {/* Custom Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-30">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-12 h-1 transition-all duration-300 ${idx === current ? 'bg-accent' : 'bg-white/20 hover:bg-white/60'
                }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Philosophy & Approach (Staggered Layout) */}
      <section className="py-32 container mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative">
              <img src="/professional.jpg" alt="Joseph Working" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            {/* Soft decorative offset block */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-neutral/30 -z-10 rounded-sm"></div>
          </motion.div>

          <div className="md:col-span-7 flex flex-col gap-12 md:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl text-primary font-display font-semibold mb-6">Empathy & Vision.</h2>
              <p className="text-secondary font-light leading-relaxed text-lg mb-4">
                I capture meaningful moments—smiles, embraces, and events—creating images that evoke emotion and preserve your cherished memories forever.
              </p>
              <p className="text-secondary font-light leading-relaxed text-lg">
                I work with complete professionalism and empathy. By listening closely to your vision, I ensure a comfortable, collaborative experience from the first consultation to the final edits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral/30"
            >
              <div>
                <h4 className="text-3xl font-display text-primary mb-2">150 +</h4>
                <p className="text-sm uppercase tracking-wider text-secondary/60">Shoots Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-display text-primary mb-2">5 +</h4>
                <p className="text-sm uppercase tracking-wider text-secondary/60">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Showcase (Dynamic Grid) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2">What I Offer</p>
              <h2 className="text-4xl md:text-5xl text-primary font-display font-semibold">Specialized Services</h2>
            </div>
            <Link to="/contact" className="hidden md:inline-block border-b hover:border-accent pb-1 transition-colors uppercase tracking-widest text-xs font-semibold mt-6 md:mt-0">
              Book a Session
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-sm cursor-pointer shadow-md hover:shadow-xl transition-shadow ${idx === 0 || idx === 3 ? 'lg:col-span-2' : '' // Create masonry feel
                  }`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  draggable={false}
                />

                {/* Always-on gradient for title legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-opacity duration-300" />

                {/* Deep overlay on hover to reveal descriptive text clearly */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-display font-medium relative translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out">{service.title}</h3>
                  <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out">
                    <p className="text-neutral/90 font-light text-sm mt-3">{service.desc}</p>
                    <span className="inline-block mt-4 text-accent text-xs uppercase tracking-widest font-semibold">Learn More &rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/contact" className="inline-block border-b border-primary hover:border-accent pb-1 transition-colors uppercase tracking-widest text-xs font-semibold">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Bold CTA */}
      <section className="py-40 bg-primary relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-8 relative z-10 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-6xl font-display font-semibold mb-8 max-w-2xl"
          >
            Ready to frame your next big moment?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            <Link
              to="/gallery"
              className="group relative inline-flex items-center justify-center bg-accent text-primary font-bold uppercase tracking-[0.2em] text-sm px-12 py-5 shadow-[0_10px_30px_rgba(236,201,75,0.2)] hover:shadow-[0_15px_40px_rgba(236,201,75,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">View Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Hero;