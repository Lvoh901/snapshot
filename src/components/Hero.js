import React from "react";
import HeroCarousel from "../assets/HeroCarousel";
import Gallery from "../assets/Gallery";

// carousel
import "../assets/assets.css";

// images
import Services from "../images/start.png";
import Camera from "../images/camera.svg";
import Photo from "../images/photo.svg";
import Lens from "../images/lens.svg";
import MultiShots from "../images/multishots.svg";

function Hero() {
  return (
    <div>
      <div className="w-full z-50 fixed bg-black text-white py-4 px-4">
        <div className="flex items-center gap-1">
          <h1 className="font-bold uppercase text-2xl lg:text-4xl">Snap</h1>
          <img
            src={Lens}
            alt="lens"
            className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full p-1"
          />
        </div>
      </div>

      <div className="pt-12">
        <HeroCarousel />
      </div>

      {/* about */}
      <div className="px-8 lg:px-20 pt-8">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
          <div className="">
            <h1 className="text-5xl lg:text-6xl font-bold font-[playfair-serif]">
              Capturing Daily life through my Lens
            </h1>
          </div>

          <div className="text-3xl font-[montserrat] lg:col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursu.
          </div>
        </div>

        <Gallery />
      </div>

      <section className="py-12 bg-gray-300">
        <div className="px-8 lg:px-12 flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl lg:text-5xl font-[playfair-serif] font-bold">
            Life is about Creating Experiences
          </h1>

          <p className="text-2xl lg:text-3xl font-[montserrat]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          <div class="relative">
            <img src={Services} alt="services" />
            <div class="absolute bottom-0 left-0 bg-gray-200 p-3 font-[Montserrat]">
              <div className="flex gap-5">
                <img
                  src={Camera}
                  alt="videoshoot"
                  className="w-4 h-4 lg:w-8 lg:h-8"
                />

                <img
                  src={Photo}
                  alt="photography"
                  className="w-4 h-4 lg:w-8 lg:h-8"
                />

                <img src={Lens} alt="lens" className="w-4 h-4 lg:w-8 lg:h-8" />

                <img
                  src={MultiShots}
                  alt="multishots"
                  className="w-4 h-4 lg:w-8 lg:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about */}

      {/* services */}
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-gray-400 p-9 flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-bold font-[playfair-serif] text-2xl lg:text-4xl">
            Photoshoots
          </h1>
        </div>

        <div className="bg-red-700 p-9 flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-bold font-[playfair-serif] text-2xl lg:text-4xl">
            VideoShoots
          </h1>
        </div>

        <div className="bg-gray-800 p-9 flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-bold font-[playfair-serif] text-2xl lg:text-4xl">
            Editing
          </h1>
        </div>
      </section>
      {/* services */}

      {/* slides */}
      <section className="grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div className="bg-img1">
          <div
            className="flex flex-col justify-center items-center text-white bg-black/75 hover:bg-black/25 cursor-pointer"
            style={{ height: "50vh" }}
          >
            <div className="text-center p-5">
              <h1 className="font-bold text-3xl lg:text-4xl">On-Site</h1>
            </div>
          </div>
        </div>

        <div className="bg-img2">
          <div
            className="flex flex-col justify-center items-center text-white bg-black/75 hover:bg-black/25 cursor-pointer"
            style={{ height: "50vh" }}
          >
            <div className="text-center p-5">
              <h1 className="font-bold text-3xl lg:text-4xl">Freelance</h1>
            </div>
          </div>
        </div>
      </section>
      {/* slides */}
    </div>
  );
}

export default Hero;
