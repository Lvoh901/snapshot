import React, { useState } from 'react';

// images
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

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        Clip, Clip1, Clip2, Clip3, Clip4, Clip5, Clip6, Clip7, Clip8, Clip9, Clip10, Clip11, Clip12, Clip13, Clip14
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className='pt-28 pb-4 px-4'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="grid gap-4">
                        <img
                            className="h-48 w-full object-cover cursor-pointer"
                            src={image}
                            alt={`Gallery img ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal for expanded image */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                    <button
                        className="absolute top-5 left-5 text-red-500 text-3xl hover:text-white hover:text-4xl"
                        onClick={handleClose}
                    >
                        &times;
                    </button>

                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-[90%] rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;