import React, { useState } from 'react';

// Images for the carousel (you can replace with actual images)
import ChairImage1 from "../images/img1.jpg";
import ChairImage2 from "../images/img2.jpg";
import ChairImage3 from "../images/img3.jpg";
import Slider from '../assets/Swiper';

const Projects = () => {
  const products = [
    {
      image: ChairImage1,
      title: "Ngong' Hills Drive",
      setting: "Outdoor Drive",
      description: "Scenic nature captures.",
      camera: "Canon EOS M50 Mark II Mirrorless",
      aperture: "F 1.4",
      shutter: "1/3000",
      ISO: "1/3000"
    },
    {
      image: ChairImage2,
      title: "Countryside",
      setting: "Outdoor Shoots",
      description: "Amazing countryside adventures and still shoots.",
      camera: "Canon EOS M6 Mark II Mirrorless Digital Camera",
      aperture: "F 1.8",
      shutter: "1/2000",
      ISO: "1/500"
    },
    {
      image: ChairImage3,
      title: "Random Shoots",
      setting: "Outdoor Shoots",
      description: "Still shoots outdoors",
      camera: "Nikon Z 50 Mirrorless Digital Camera",
      aperture: "F 2.0",
      shutter: "1/800",
      ISO: "1/2000"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8 pt-16">

      {/* Main Flexbox Container */}
      <div className="flex flex-col lg:flex-row gap-8 pt-8">

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-full h-auto object-cover rounded-lg"
          />

          <div className="pt-4 space-x-4 flex justify-center lg:justify-start">
            {/* Previous/Next Buttons */}
            <button
              onClick={handlePrev}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{currentProduct.title}</h1>

          <div className="py-2">
            <h3 className="text-lg md:text-xl text-gray-500">{currentProduct.setting}</h3>
            <p className="text-gray-600 mb-4">{currentProduct.description}</p>
          </div>

          <p className="font-bold text-lg">Specifications:</p>

          <div className="pt-2 space-y-1">
            <p>Camera: {currentProduct.camera}</p>
            <p>Aperture: {currentProduct.aperture}</p>
            <p>Shutter Speed: {currentProduct.shutter}</p>
            <p>ISO: {currentProduct.ISO}</p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="py-8">
        <Slider />
      </div>
    </div>
  );
};

export default Projects;