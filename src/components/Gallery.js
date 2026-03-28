import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import galleryData from './gallery.json';

const ITEMS_PER_PAGE = 8; // Increased slightly for better masonry flow

const fadeInCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeInModal = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
};

const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
};

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const currentItems = galleryData.slice(startIdx, endIdx);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const openImage = (item) => {
        setSelectedImage(item);
        document.body.style.overflow = 'hidden';
    };

    const closeImage = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-10 lg:px-20">
            {/* Header Area */}
            <div className="mb-16 text-center">
                <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Portfolio</p>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
                    The Exhibition
                </h1>
                <p className="text-secondary/80 font-light text-lg max-w-2xl mx-auto">
                    A curated collection of moments captured across various settings and landscapes.
                </p>
                <div className="w-24 h-1 bg-accent mx-auto mt-8 opacity-50"></div>
            </div>

            {/* Masonry Grid */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-8"
                columnClassName="pl-8 bg-clip-padding"
            >
                    {currentItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            variants={fadeInCard}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                            className="relative mb-8 group overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-neutral/10"
                            onClick={() => openImage(item)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View full image of ${item.name}`}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') openImage(item);
                            }}
                        >
                            {/* Edge-to-edge image */}
                            <img
                                src={item.location}
                                alt={item.name}
                                className="w-full block transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                loading="lazy"
                            />

                            {/* Deep creeping gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Exhibition-style technical plaque */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                                <h3 className="text-white font-display text-2xl mb-1">{item.name}</h3>
                                <p className="text-white/70 text-xs tracking-wider uppercase mb-4">{item.geographical_location} &mdash; {item.setting}</p>
                                
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-accent tracking-widest uppercase font-semibold border-t border-white/20 pt-4">
                                    <span>F/{item.technical_details.f_stop}</span>
                                    <span>ISO {item.technical_details.iso}</span>
                                    <span>{item.technical_details.shutter}</span>
                                    <span>{item.technical_details.zoom}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </Masonry>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-16 pt-8 border-t border-neutral/20 gap-3">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-6 py-3 rounded-sm transition-all text-xs tracking-widest uppercase font-semibold border ${
                            currentPage === 1
                                ? 'border-neutral/40 text-neutral/50 cursor-not-allowed'
                                : 'border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                    >
                        Previous
                    </button>
                    <div className="hidden sm:flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToPage(i + 1)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                                    currentPage === i + 1
                                        ? 'bg-accent text-primary'
                                        : 'text-secondary hover:bg-neutral/30'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-6 py-3 rounded-sm transition-all text-xs tracking-widest uppercase font-semibold border ${
                            currentPage === totalPages
                                ? 'border-neutral/40 text-neutral/50 cursor-not-allowed'
                                : 'border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Full Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md p-4 sm:p-8"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeInModal}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div
                            className="absolute inset-0 cursor-zoom-out"
                            onClick={closeImage}
                            aria-label="Close full image"
                            tabIndex={-1}
                        />
                        <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row gap-8 items-center bg-transparent">
                            
                            {/* Close Button top right of screen really elegant */}
                            <button
                                onClick={closeImage}
                                className="fixed top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-accent transition-colors focus:outline-none z-50 group flex items-center gap-2"
                                aria-label="Close"
                            >
                                <span className="uppercase tracking-widest text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 hidden sm:block">Close</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:h-10 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image Container */}
                            <div className="w-full lg:w-2/3 flex justify-center">
                                <img
                                    src={selectedImage.location}
                                    alt={selectedImage.name}
                                    className="max-h-[70vh] lg:max-h-[85vh] object-contain shadow-2xl rounded-sm"
                                />
                            </div>

                            {/* Details Container */}
                            <div className="w-full lg:w-1/3 text-white">
                                <p className="text-accent uppercase tracking-[0.2em] text-[10px] font-semibold mb-2">Exhibition Detail</p>
                                <h2 className="text-3xl lg:text-4xl font-display font-medium mb-4">{selectedImage.name}</h2>
                                
                                <div className="space-y-6 mt-8">
                                    <div>
                                        <h4 className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Location</h4>
                                        <p className="font-light text-sm">{selectedImage.geographical_location}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Setting</h4>
                                        <p className="font-light text-sm">{selectedImage.setting}</p>
                                    </div>
                                    
                                    <div className="border-t border-white/10 pt-6 mt-6">
                                        <h4 className="text-white/50 text-[10px] uppercase tracking-widest mb-4">Technical Specs</h4>
                                        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                                            <div>
                                                <span className="block text-accent text-[9px] uppercase tracking-widest">Aperture</span>
                                                <span className="font-medium text-sm">f/{selectedImage.technical_details.f_stop}</span>
                                            </div>
                                            <div>
                                                <span className="block text-accent text-[9px] uppercase tracking-widest">ISO Speed</span>
                                                <span className="font-medium text-sm">{selectedImage.technical_details.iso}</span>
                                            </div>
                                            <div>
                                                <span className="block text-accent text-[9px] uppercase tracking-widest">Shutter</span>
                                                <span className="font-medium text-sm">{selectedImage.technical_details.shutter}</span>
                                            </div>
                                            <div>
                                                <span className="block text-accent text-[9px] uppercase tracking-widest">Focal Length</span>
                                                <span className="font-medium text-sm">{selectedImage.technical_details.zoom}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Gallery;
