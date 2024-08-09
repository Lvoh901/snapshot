import React from 'react';

// images
import Img1 from '../images/gallery.jpg';
import Img2 from '../images/gallery1.jpg';
import Img3 from '../images/gallery2.jpg';
import Img4 from '../images/gallery3.jpg';
import Img5 from '../images/gallery4.jpg';
import Img6 from '../images/gallery6.jpg';

const Projects = () => {
  return (
    <div className='pt-20 flex flex-col justify-center items-center'>
      <h1 className='text-5xl sm:text-3xl lg:text-7xl font-bold py-4' id="hero_name">Projects</h1>

      <section className='px-8 lg:px-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='p-12'>
            <h1 className='text-3xl lg:text-5xl'>Project <span>Evolve1</span></h1>
            <p>Ante at sapien dapibus, luctus euismod fames. Quam vehicula erat rutrum nunc porttitor nam. Cras sodales natoque fermentum eleifend neque quam etiam vel auctor. Magnis habitant lobortis cursus integer porta congue tempus cras pretium. Fringilla sapien lacus consectetur massa conubia nunc himenaeos duis. Platea dignissim scelerisque sapien magna malesuada iaculis mauris morbi.</p>
          </div>

          <img src={Img1} className='' style={{ width: "50vw" }} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <img src={Img2} className='' style={{ width: "50vw" }} />

          <div className='p-12'>
            <h1 className='text-3xl lg:text-5xl'>Project <span>Evolve2</span></h1>
            <p>Ante at sapien dapibus, luctus euismod fames. Quam vehicula erat rutrum nunc porttitor nam. Cras sodales natoque fermentum eleifend neque quam etiam vel auctor. Magnis habitant lobortis cursus integer porta congue tempus cras pretium. Fringilla sapien lacus consectetur massa conubia nunc himenaeos duis. Platea dignissim scelerisque sapien magna malesuada iaculis mauris morbi.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects;