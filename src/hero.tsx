import { ArrowDownToLine } from "lucide-react";

export function Hero(){

  const handleDownload=()=>{

 const link = document.createElement("a");
  link.href = "/shanCV.pdf";
  link.download = "Shan-Putten-Resume.pdf";
  link.click();

  }
    return(
   <section id= "home" className=" min-h-screen flex flex-col items-center  bg-linear-to-r from-gray-950 to-gray-400  overflow-hidden relative  ">
    
    <div className=" my-auto absolute top-30 max-w-4xl flex flex-col items-center transition-all duration-400  ease-in-out">
     <h1 className="text-5xl md:text-7xl  px-6 mt-12 mx-auto whitespace-nowrap bg-linear-to-r from-white to to-white bg-clip-text text-transparent ">Hi, I'm Shan Putten </h1>
     <p className="text-3xl md:text-4xl border-r-2 my-4 typing-animation  text-gray-100  ">I Am A Software Developer</p>

     <div className="flex flex-col items center perspective-dramatic ">
       <p className="text-xl max-w-xl max-sm:text-lg text-gray-300 whitespace-nowrap mx-auto mt-4 mb-1 px-2 enlarge-animation [--delay:3s]">Exploring UI And Animation To Create Rich Digital Experiences</p>
       <p className="text-xl max-w-xl max-sm:text-lg text-gray-300 whitespace-nowrap mx-auto px-2 enlarge-animation [--delay:3.25s]">Open To Frontend As Well As Backend Development</p>
     </div>
     <button className="mt-12 px-6 py-3 bg-transparent border-2 text-white/90 rounded-lg
      hover:bg-gray-900 cursor-pointer transition-colors duration-300 ease-in-out flex justify-center items-center"
     onClick={handleDownload}
     >
      <ArrowDownToLine size={18} className="mr-2"></ArrowDownToLine>
     
    <p>Download CV</p>
     </button>
   
   </div>
   </section>
  
    )
}