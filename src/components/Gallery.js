import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { motion, AnimatePresence } from 'framer-motion';
import AutoSizer from 'react-virtualized-auto-sizer';

// Import your images
import Clip from '../images/clip.jpeg';
import Clip1 from '../images/clip1.jpeg';
import Clip2 from '../images/clip2.jpeg';
import Clip3 from '../images/clip3.jpeg';
import Clip4 from '../images/clip4.jpeg';
import Clip5 from '../images/clip5.jpeg';
import Clip6 from '../images/clip6.jpeg';
import Clip7 from '../images/clip7.jpeg';
import Clip8 from '../images/clip8.jpeg';
import Clip9 from '../images/img1.jpg';
import Clip10 from '../images/img2.jpg';
import Clip11 from '../images/img3.jpg';
import Clip12 from '../images/img4.jpg';
import Clip13 from '../images/img5.jpg';
import Clip14 from '../images/img6.jpg';

const imageData = [
    { id: 1, src: Clip, title: 'Mountain Sunrise', location: 'Kenya', camera: 'Canon R5', settings: 'f/2.8 ISO100 1/250s' },
    { id: 2, src: Clip1, title: 'Northern Lights', location: 'Iceland', camera: 'Sony A7IV', settings: 'f/4 ISO400 1/125s' },
    { id: 3, src: Clip2, title: 'Fjord Landscape', location: 'Norway', camera: 'Nikon D850', settings: 'f/5.6 ISO200 1/320s' },
    { id: 4, src: Clip3, title: 'Glacier View', location: 'Alaska', camera: 'Canon R6', settings: 'f/1.8 ISO800 1/60s' },
    { id: 5, src: Clip4, title: 'Highland Castle', location: 'Scotland', camera: 'Sony A7III', settings: 'f/8 ISO100 1/200s' },
    { id: 6, src: Clip5, title: 'Machu Picchu', location: 'Peru', camera: 'Fujifilm X-T4', settings: 'f/3.5 ISO320 1/500s' },
    { id: 7, src: Clip6, title: 'Cherry Blossoms', location: 'Japan', camera: 'Olympus OM-D', settings: 'f/2 ISO640 1/60s' },
    { id: 8, src: Clip7, title: 'Rainforest', location: 'Brazil', camera: 'Panasonic GH5', settings: 'f/2.8 ISO100 1/100s' },
    { id: 9, src: Clip8, title: 'Outback Sunset', location: 'Australia', camera: 'Canon EOS R', settings: 'f/4 ISO400 1/250s' },
    { id: 10, src: Clip9, title: 'Eiffel Tower', location: 'France', camera: 'Sony A1', settings: 'f/5.6 ISO200 1/160s' },
    { id: 11, src: Clip10, title: 'Neuschwanstein', location: 'Germany', camera: 'Leica Q2', settings: 'f/2 ISO100 1/125s' },
    { id: 12, src: Clip11, title: 'Colosseum', location: 'Italy', camera: 'Nikon Z6', settings: 'f/4 ISO160 1/80s' },
    { id: 13, src: Clip12, title: 'Chichen Itza', location: 'Mexico', camera: 'Canon 90D', settings: 'f/6.3 ISO500 1/1000s' },
    { id: 14, src: Clip13, title: 'Grand Canyon', location: 'USA', camera: 'Sony RX100', settings: 'f/3.2 ISO200 1/320s' },
    { id: 15, src: Clip14, title: 'Santorini', location: 'Greece', camera: 'Fujifilm X100V', settings: 'f/2.8 ISO400 1/200s' }
];

const COLUMN_WIDTH = 300;
const ROW_HEIGHT = 300;
const GUTTER_SIZE = 16;

const Gallery = () => {
    const [images, setImages] = useState(imageData);
    const [selected, setSelected] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const modalRef = useRef();

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleBackdropClick = useCallback((e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setSelected(null);
        }
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            setSelected(null);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

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
                    onClick={() => setSelected(image)}
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

    return (
        <div className="h-[calc(100vh-100px)] px-4 pt-28">
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
                                itemData={{ images, columns }}
                            >
                                {Cell}
                            </Grid>
                        );
                    }}
                </AutoSizer>
            )}

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleBackdropClick}
                    >
                        <motion.div
                            ref={modalRef}
                            className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                                onClick={() => setSelected(null)}
                                aria-label="Close modal"
                            >
                                &times;
                            </button>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <motion.img
                                        src={selected.src}
                                        alt={selected.title}
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
                                        {selected.title}
                                    </motion.h2>

                                    <motion.div
                                        className="space-y-3 text-gray-600"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-500">LOCATION</h4>
                                            <p>{selected.location}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-500">CAMERA</h4>
                                            <p>{selected.camera}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-500">SETTINGS</h4>
                                            <p>{selected.settings}</p>
                                        </div>

                                        {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                            Download Full Resolution
                                        </button> */}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;