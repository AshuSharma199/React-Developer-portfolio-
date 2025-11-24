import React from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div id='footer' 
    className=' bg-[#465697] text-white'>
    <div className='flex items-center justify-between p-10 md:pl-30 md:pr-30'>
    <div>
     <h1>
        Contact
    </h1>
     <h3>
        Feel Free To reach Out!
    </h3>
    </div> 

    <ul className='flex flex-col gap-3'>
   <li>
    <a href="mailto:ashusharma844577@gmail.com" target='_blank' className='flex gap-1 items-center'>
    <MdOutlineEmail size={25}  />
    <span > Ashusharma844577@gmail.com </span>
    </a>
   </li>
   <li >
    <a href="https://www.linkedin.com/in/ashu-sharma-3a6a9a275" target='_blank' className='flex gap-1 items-center'>
    <CiLinkedin  size={30}/>
    <span> Ashu_sharma_199</span>
   </a>
   </li>
   <li >
    <a href="https://github.com/AshuSharma199" className='flex gap-1 items-center'>
    <FaGithub size={30} />
    <span> Ashusharma_199</span>
    </a>
   </li>
    </ul>
    </div>
    <div className='flex justify-center pb-5'>
    <span >© {new Date().getFullYear()} Ashu Sharma — Frontend Developer. All Rights Reserved.</span>
    
    </div>
    </div>
  )
}

export default Footer
