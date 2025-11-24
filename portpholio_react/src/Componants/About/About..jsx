import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/outsourcing.png"
const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
       <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center' >
            <img className='md:h-90 w-100' src={AboutImg} alt="About img" />
          <ul>
            <div className='flex gap-3 py-4'>
               <IoArrowForward size={30} className="mt-1" />

               <span className='w-full md:w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                    I create fast, responsive, and interactive web interfaces that look great on every device. I focus on writing clean code, smooth animations, and building user experiences that feel natural and enjoyable.   
                </p>
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React,js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
               </span>
              
            </div>
            <div className='flex gap-3 py-4'>
               <IoArrowForward size={30} className="mt-1" />

               <span className='w-full md:w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>UI/UX Designer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  I design user-friendly layouts with a focus on clarity, simplicity, and visual appeal. I love turning ideas into wireframes, prototypes, and polished, modern interfaces.
                </p>
                <li>UI Design (web & mobile) </li>
                <li>User Flow & Wireframing</li>
                <li>Figma, Adobe XD</li>
                <li>Color Theory, Typography , Spacing</li>
               </span>
              
            </div>
            <div className='flex gap-3 py=4'>
               <IoArrowForward size={30} className="mt-1" />

               <span className='w-full md:w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                 I build and connect APIs that power the frontend. I focus on secure, scalable code and smooth communication between server and client.                </p>
              <li>Node.js, Express.js</li>
              <li>Rest API Development</li>
              <li>MongoDB,MySQL</li>
              <li>Authentication(JWT)</li>
               </span>
              
            </div>
          </ul>

        </div>
       </div>
    </div>
  )
}

export default About
