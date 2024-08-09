import React from 'react';
import './assets.css';

// images
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';
import Img5 from '../images/img5.jpg';
import Img6 from '../images/img6.jpg';

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {images.map((image, index) => (
                    <div className="slider-item" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="" />
                    </div>
                ))}
                {/* Duplicate images for seamless infinite loop */}
                {images.map((image, index) => (
                    <div className="slider-item" key={index + images.length}>
                        <img src={image} alt={`Slide ${index + 1}`} className="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;