import { useState } from "react";
import UserImg from "../../assets/1st_image.png"
import TextChanger from "../TextChanger"
const Home =()=>{

    const [openContact , setOpenContact]=useState(false)
    
    const ViewResume =()=>{
        window.open("https://drive.google.com/file/d/1wFPBebOsoZfp1cr9mLf3t3aAwgDY5vrP/view?usp=sharing")
    };
    
    console.log(openContact);
    return(
        <div className="text-white flex w-full justify-between items-center p-10 md:p-10">
         <div className="md:w-3/4 md:pt-10">
         <div className="h-fit" >
            <h1 className="text-2xl md:text-5xl font-bold flex leading-normal tracking-tight">
             Hi,<TextChanger />
                 </h1>
         </div>
            <p className="text-sm md:text-lg md:md-10 tracking-tight">
                focused on performance, accessibility, and modern UI. I love building things that look great and work even better.
Open to frontend roles, collaboration, and cool projects where I can put my energy to good use and create real impact. </p>
       
       <div className="flex flex-col w-fit ">
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
         onClick={()=>setOpenContact(!openContact)}  
            >Contact Me</button>
            <button
              onClick={ViewResume}
             className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                Resume</button>
       </div>

            
         </div>
         <div className="flex justify-end " ><img className="md:w-3/4" src={UserImg} alt="" /></div>
        </div>
    )
}
export default Home