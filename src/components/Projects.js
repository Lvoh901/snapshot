import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from '../assets/Carousel';


// images
import Img1 from '../images/gallery.jpg';
import Img3 from '../images/gallery2.jpg';

const Projects = () => {
  return (
    <div className='pt-20 px-8'>
      <h1 className='text-5xl sm:text-3xl lg:text-7xl font-bold py-4 underline underline-offset-8 decoration-yellow-300' id="hero_name">Projects</h1>

      <section className='px-8 lg:px-20 space-y-2 lg:space-y-0 flex flex-col justify-center items-center' data-aos="fade-up">
        {/* project1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='p-8 space-y-4'>
            <h1 className='text-3xl lg:text-5xl'>Project <span className='italic'>1</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula arcu, cursus eu mattis sit amet, consectetur at neque. Ut luctus imperdiet urna, ut rhoncus sem varius eget. Aliquam imperdiet in libero at mollis. Maecenas ut diam vulputate, scelerisque nisl vulputate, commodo neque.</p>

            <p className='font-bold'>Specifics:</p>
            <ul className='list-decimal pl-8'>
              <li>Camera: Canon EOS M50 Mark II Mirrorless</li>
              <li>Aperture: F 1.4</li>
              <li>Shutter Speed: 1/500</li>
              <li>ISO: 250</li>
              <li>Dark Room</li>
            </ul>
          </div>

          <img src={Img1} className='w-full' alt='project1' />
        </div>

        {/* project2 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:flex-col-reverse'>
          <img src={Img3} className='w-full order-2 lg:order-1' alt='project2' />

          <div className='p-8 order-1 lg:order-2 space-y-4'>
            <h1 className='text-3xl lg:text-5xl'>Project <span className='italic'>2</span></h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis iaculis convallis. Vivamus fringilla felis ac aliquam facilisis. Phasellus sed tortor auctor, dignissim sem vel, mattis nisl. Aenean egestas condimentum fermentum.</p>

            <p className='font-bold'>Specifics:</p>
            <ul className='list-decimal pl-8'>
              <li>Camera: Canon EOS M50 Mark II Mirrorless</li>
              <li>Aperture: F 1.4</li>
              <li>Shutter Speed: 1/500</li>
              <li>ISO: 250</li>
              <li>Dark Room</li>
            </ul>
          </div>
        </div>
      </section>

      <div className='py-4'>
        <Carousel />
      </div>

      <a className="group relative inline-block focus:outline-none focus:ring my-4" href="/gallery">
        <span
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>

        <span
          className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
        >
          More Projects +
        </span>
      </a>
    </div>
  )
}

AOS.init();

export default Projects;