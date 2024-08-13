import React from 'react';
import Char from '../images/character.png';

const About = () => {
  return (
    <div className='h-screen p-20 flex flex-col justify-center items-center'>
      <div className='flex gap-1 pt-12 pb-4'>
        <p className=''>About</p>
        <h1 className='text-5xl sm:text-3xl lg:text-7xl font-bold' id="hero_name">Joseph</h1>
      </div>

      <img src={Char} style={{width:"calc(18em + 5vw)"}} alt='character'/>

      <div className='text-center space-y-4 py-4'>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis lorem cubilia nisl convallis nostra dapibus. Donec natoque elit; ullamcorper nullam erat eu netus. </p>

        <p>Ante at sapien dapibus, luctus euismod fames. Quam vehicula erat rutrum nunc porttitor nam. Cras sodales natoque fermentum eleifend neque quam etiam vel auctor. Magnis habitant lobortis cursus integer porta congue tempus cras pretium. Fringilla sapien lacus consectetur massa conubia nunc himenaeos duis. Platea dignissim scelerisque sapien magna malesuada iaculis mauris morbi.</p>
      </div>
    </div>
  )
}

export default About;