import React from "react";
import "./assets.css";

// images import
import Gallery1 from "../images/gallery1.png";
import Gallery2 from "../images/gallery2.png";
import Gallery3 from "../images/gallery3.png";

function Gallery() {
  return (
    <div className="pb-3">
      <div className="py-4 flex justify-center flex-wrap gap-1">
        <div class="relative">
          <img src={Gallery1} alt="pic1" />
          <div class="absolute top-0 left-0 bg-gray-300 p-3 font-[Montserrat]">
            <p>Nature's Peace</p>
          </div>
        </div>

        <div class="relative">
          <img src={Gallery2} alt="pic2" />
          <div class="absolute top-0 left-0 bg-gray-300 p-3 font-[Montserrat]">
            <p>Soothing Sunsets</p>
          </div>
        </div>

        <div class="relative">
          <img src={Gallery3} alt="pic3" />
          <div class="absolute top-0 left-0 bg-gray-300 p-3 font-[Montserrat]">
            <p>Father's Day</p>
          </div>
        </div>
      </div>

      <button>
        <span class="text">Full Portfolio</span>
        <span>Welcome</span>
      </button>
    </div>
  );
}

export default Gallery;
