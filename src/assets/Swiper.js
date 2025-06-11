import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './assets.css';

// Static imports (replace with your actual image paths)
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';
import Img5 from '../images/img5.jpg';
import Img6 from '../images/img6.jpg';

const slides = [
    {
        image: Img1,
        title: 'Mountain View',
        description: 'Breathtaking view of the highlands.',
    },
    {
        image: Img2,
        title: 'Urban Lights',
        description: 'City skyline glowing under the stars.',
    },
    {
        image: Img3,
        title: 'Tranquil Lake',
        description: 'Peaceful reflections at dusk.',
    },
    {
        image: Img4,
        title: 'Forest Trail',
        description: 'Winding paths through ancient woods.',
    },
    {
        image: Img5,
        title: 'Desert Mirage',
        description: 'Golden sands under a blazing sky.',
    },
    {
        image: Img6,
        title: 'Coastal Horizon',
        description: 'Where ocean meets the sky.',
    },
];

const useAutoSlide = (isPaused, max, delay = 3000) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % max);
        }, delay);

        return () => clearInterval(interval);
    }, [isPaused, max, delay]);

    return [index, setIndex];
};

const Slider = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useAutoSlide(isPaused, slides.length);

    const handlePrev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <div
            className="flex justify-center items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative w-full max-w-4xl p-2 shadow-xl rounded-xl bg-white slider-container">
                <div className="slider-wrapper overflow-hidden rounded-lg">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="slider-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1.05 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="w-full object-cover h-96 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                                loading="lazy"
                            />
                            <motion.div
                                className="slider-caption mt-4 py-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold">{currentSlide.title}</h3>
                                <p className="text-gray-600">{currentSlide.description}</p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="slider-controls flex items-center justify-between mt-6">
                    <button
                        className="text-2xl px-4 py-2 hover:text-blue-600"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        &lt;
                    </button>

                    <div className="flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={clsx(
                                    'w-3 h-3 rounded-full focus:outline-none transition-colors',
                                    index === currentIndex
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300 hover:bg-gray-500'
                                )}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="text-2xl px-4 py-2 hover:text-blue-600"
                        onClick={handleNext}
                        aria-label="Next slide"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
