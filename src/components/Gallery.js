import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { motion, AnimatePresence } from 'framer-motion';
import AutoSizer from 'react-virtualized-auto-sizer';

// Import all images dynamically (better approach for many images)
const importAll = (r) => r.keys().map(r);
const imageContext = require.context('../images/gallery', false, /\.(jpg|jpeg|png|webp)$/);
const imageFiles = importAll(imageContext);

// Configuration constants
const COLUMN_WIDTH = 350;
const ROW_HEIGHT = 350;
const GUTTER_SIZE = 16;

// Generate image data programmatically
const generateImageData = () => {
    const locations = ['Kenya', 'Iceland', 'Norway', 'Alaska', 'Scotland', 'Peru', 'Japan', 'Brazil', 'Australia', 'France', 'Germany', 'Italy', 'Mexico', 'USA', 'Greece'];
    const cameras = ['Canon R5', 'Sony A7IV', 'Nikon D850', 'Canon R6', 'Sony A7III', 'Fujifilm X-T4', 'Olympus OM-D', 'Panasonic GH5', 'Canon EOS R', 'Sony A1', 'Leica Q2', 'Nikon Z6', 'Canon 90D', 'Sony RX100', 'Fujifilm X100V'];
    const settings = ['f/2.8 ISO100 1/250s', 'f/4 ISO400 1/125s', 'f/5.6 ISO200 1/320s', 'f/1.8 ISO800 1/60s', 'f/8 ISO100 1/200s', 'f/3.5 ISO320 1/500s', 'f/2 ISO640 1/60s', 'f/2.8 ISO100 1/100s', 'f/4 ISO400 1/250s', 'f/5.6 ISO200 1/160s', 'f/2 ISO100 1/125s', 'f/4 ISO160 1/80s', 'f/6.3 ISO500 1/1000s', 'f/3.2 ISO200 1/320s', 'f/2.8 ISO400 1/200s'];

    return imageFiles.map((src, index) => ({
        id: index + 1,
        src,
        title: `Photo ${index + 1}`,
        location: locations[index % locations.length],
        camera: cameras[index % cameras.length],
        settings: settings[index % settings.length]
    }));
};

// Memoized Cell component
const Cell = React.memo(({ columnIndex, rowIndex, style, data }) => {
    const index = rowIndex * data.columns + columnIndex;
    const image = data.images[index];
    if (!image) return null;

    return (
        <motion.div
            style={{
                ...style,
                padding: `${GUTTER_SIZE / 2}px`,
                width: `calc(${style.width}px - ${GUTTER_SIZE}px)`,
                height: `calc(${style.height}px - ${GUTTER_SIZE}px)`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="overflow-hidden"
        >
            <motion.div
                className="relative h-full w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                onClick={() => data.onSelect(image)}
            >
                <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium truncate">{image.title}</h3>
                    <p className="text-white/80 text-sm truncate">{image.location}</p>
                </div>
            </motion.div>
        </motion.div>
    );
});

// Modal component
const ImageModal = ({ image, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <motion.img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-auto rounded-lg shadow-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                    </div>

                    <div className="md:w-1/3 space-y-4">
                        <motion.h2
                            className="text-2xl font-bold text-gray-800"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {image.title}
                        </motion.h2>

                        <motion.div
                            className="space-y-3 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div>
                                <h4 className="text-sm font-semibold text-gray-500">LOCATION</h4>
                                <p>{image.location}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500">CAMERA</h4>
                                <p>{image.camera}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500">SETTINGS</h4>
                                <p>{image.settings}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Gallery component
const Gallery = () => {
    const [images] = useState(generateImageData());
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setSelectedImage(null);
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div className="h-screen px-4 pt-28">
            {isLoading ? (
                <div className="flex items-center justify-center h-full">
                    <div className="animate-pulse text-gray-500">Loading gallery...</div>
                </div>
            ) : (
                <AutoSizer>
                    {({ height, width }) => {
                        const columns = Math.max(1, Math.floor(width / COLUMN_WIDTH));
                        const rowCount = Math.ceil(images.length / columns);

                        return (
                            <Grid
                                columnCount={columns}
                                columnWidth={COLUMN_WIDTH}
                                height={height}
                                rowCount={rowCount}
                                rowHeight={ROW_HEIGHT}
                                width={width}
                                itemData={{
                                    images,
                                    columns,
                                    onSelect: setSelectedImage
                                }}
                            >
                                {Cell}
                            </Grid>
                        );
                    }}
                </AutoSizer>
            )}

            <AnimatePresence>
                {selectedImage && (
                    <ImageModal
                        image={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;