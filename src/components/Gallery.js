import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from './gallery.json';

const ITEMS_PER_PAGE = 6;

const fadeInCard = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const fadeInModal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
};

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const currentItems = galleryData.slice(startIdx, endIdx);

    // Ensure page loads from the top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const openImage = (item) => {
        setSelectedImage(item);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeImage = () => {
        setSelectedImage(null);
        document.body.style.overflow = ''; // Restore scroll
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-28 px-4 md:px-10 lg:px-20">
            <h1 className="text-4xl font-extrabold text-center text-[#003366] mb-10 underline decoration-[#FCBA04] underline-offset-8">
                Photo Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <AnimatePresence>
                    {currentItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={fadeInCard}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group overflow-hidden relative"
                        >
                            {/* Overlay covers the whole card */}
                            <div className="absolute inset-0 z-10 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center px-4 text-sm pointer-events-none">
                                <h3>Location: {item.geographical_location}</h3>
                                <h4>Setting: {item.setting}</h4>
                                <div className="mt-2 space-y-1 text-gray-300 text-xs">
                                    <p><strong>F-Stop:</strong> {item.technical_details.f_stop}</p>
                                    <p><strong>ISO:</strong> {item.technical_details.iso}</p>
                                    <p><strong>Shutter:</strong> {item.technical_details.shutter}</p>
                                    <p><strong>Zoom:</strong> {item.technical_details.zoom}</p>
                                </div>
                            </div>
                            
                            <div
                                className="relative w-full h-64 cursor-pointer"
                                onClick={() => openImage(item)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View full image of ${item.name}`}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') openImage(item);
                                }}
                            >
                                <img
                                    src={item.location}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="py-4 px-3 text-center">
                                <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Full Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeInModal}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            className="absolute inset-0"
                            onClick={closeImage}
                            aria-label="Close full image"
                            tabIndex={-1}
                        />
                        <div className="relative z-10 max-w-3xl w-full mx-4">
                            <button
                                onClick={closeImage}
                                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img
                                src={selectedImage.location}
                                alt={selectedImage.name}
                                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white"
                            />
                            <div className="mt-4 bg-white/90 rounded-lg p-4 text-gray-800 shadow">
                                <h2 className="text-xl font-bold mb-2">{selectedImage.name}</h2>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold">Location:</span> {selectedImage.geographical_location}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Setting:</span> {selectedImage.setting}
                                    </div>
                                    <div>
                                        <span className="font-semibold">F-Stop:</span> {selectedImage.technical_details.f_stop}
                                    </div>
                                    <div>
                                        <span className="font-semibold">ISO:</span> {selectedImage.technical_details.iso}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Shutter:</span> {selectedImage.technical_details.shutter}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Zoom:</span> {selectedImage.technical_details.zoom}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 flex-wrap gap-2 pb-3">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded transition-all text-sm ${currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#003366] text-white hover:bg-yellow-500 hover:text-black font-medium uppercase'
                        }`}
                >
                    Previous
                </button>
                <button
                    className="px-3 py-1 rounded text-sm font-medium bg-blue-800 text-white cursor-default"
                    disabled
                >
                    {currentPage}
                </button>
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded text-sm ${currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#003366] text-white hover:bg-yellow-500 hover:text-black font-medium uppercase'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Gallery;
