import React from 'react';

// images
import Img1 from '../images/gallery.jpg';
import Img3 from '../images/gallery2.jpg';

const Projects = () => {
  return (
    <div className='pt-20 px-8'>
      <h1 className='text-5xl sm:text-3xl lg:text-7xl font-bold py-4 underline underline-offset-8 decoration-yellow-300' id="hero_name">Projects</h1>

      <section className='px-8 lg:px-20 space-y-2 lg:space-y-0 flex flex-col justify-center items-center'>
        {/* project1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='p-8'>
            <h1 className='text-3xl lg:text-5xl'>Project <span>Evolve1</span></h1>
            <p>Ante at sapien dapibus, luctus euismod fames. Quam vehicula erat rutrum nunc porttitor nam. Cras sodales natoque fermentum eleifend neque quam etiam vel auctor. Magnis habitant lobortis cursus integer porta congue tempus cras pretium. Fringilla sapien lacus consectetur massa conubia nunc himenaeos duis. Platea dignissim scelerisque sapien magna malesuada iaculis mauris morbi.</p>
          </div>

          <img src={Img1} className='w-full' />
        </div>

        {/* project2 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:flex-col-reverse'>
          <img src={Img3} className='w-full order-2 lg:order-1' />

          <div className='p-8 order-1 lg:order-2'>
            <h1 className='text-3xl lg:text-5xl'>Project <span>Evolve2</span></h1>
            <p>Ante at sapien dapibus, luctus euismod fames. Quam vehicula erat rutrum nunc porttitor nam. Cras sodales natoque fermentum eleifend neque quam etiam vel auctor. Magnis habitant lobortis cursus integer porta congue tempus cras pretium. Fringilla sapien lacus consectetur massa conubia nunc himenaeos duis. Platea dignissim scelerisque sapien magna malesuada iaculis mauris morbi.</p>
          </div>
        </div>
      </section>

      <button className="group relative inline-block focus:outline-none focus:ring my-4" href="/">
        <span
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>

        <span
          className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
        >
          More Projects +
        </span>
      </button>
    </div>
  )
}

export default Projects;