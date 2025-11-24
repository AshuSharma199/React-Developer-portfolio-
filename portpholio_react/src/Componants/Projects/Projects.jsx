import React from 'react'
import ProjectCart from './ProjectCart'
import ProjectImg1 from "../../assets/botique.png"
import ProjectImg2 from '../../assets/projectimg2.png'
import ProjectImg3 from "../../assets/projectimg3.png"

const Projects = () => {
  return (
    <div id="Project" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex justify-center flex-wrap  gap-5'>
        <ProjectCart title={"Botic — E-Commerce Website"}
                     main={"A clean and responsive shopping UI built using React and TailwindCSS. Features reusable components, smooth navigation, and a modern product layout for a better user experience."}
                     ProjectImg={ProjectImg1}
                     demolink={"https://botique-dev-ashu.netlify.app/"}
                     codelink={"https://github.com/AshuSharma199/Boutiqu"} />
        <ProjectCart title={"QR ID Card Generator Web App"}
                     main={"A web app where users fill in their basic details to instantly generate a personalized ID card with a unique QR code. The QR stores all user information securely and can be scanned anytime for quick access."}
                     ProjectImg={ProjectImg2}
                     demolink={"https://ashusharma199.github.io/ID-Card-and-Badge-Generato/"}
                     codelink={"https://github.com/AshuSharma199/ID-Card-and-Badge-Generato"} />
        <ProjectCart title={"Personal Portfolio Website (React.js, TailwindCSS"}
                     main= {"A modern and responsive portfolio showcasing my skills, projects, and experience as a frontend developer. Designed with a clean UI, smooth navigation, and interactive elements to deliver a great user experience and highlight my work effectively."}
                     ProjectImg={ProjectImg3}
                     demolink={""}
                     codelink={""} />
      </div>
    </div>
  )
}

export default Projects
