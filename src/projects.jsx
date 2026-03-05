import { useEffect,useState,useRef } from "react"
import { motion,useInView } from "motion/react"
import v1 from "./assets/v1.mp4"
import v2 from "./assets/v2.mp4"
import { PhoneMockup } from "./phoneMockup.jsx"

export function Projects(){

    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,amount:0.3})

    const frameContent=[
    //  {src:m1, type:"image",duration:3000} ,
      {src:v1,type:"video",duration:8000},
      {src:v2, type:"video",duration:15000}
    ];
    const tools=["React native","Direction Api","Firebase","Expo"]
   const features=["Live-Tracking","Navigation Assistance","Search"]
    
    const [isVisible,setVisible]=useState(false);
    

    

    return(
        <motion.section id="projects" 
        className=" mt-30 scroll-mt-32"
        initial={{opacity:0,y:50}}
        ref={ref}
        animate={
          isInView ? { opacity:1, y:0}
          :{}

        }
        transition={{duration:0.8, ease:"easeOut"}}
        >
            
            
    
            <h2 className="text-5xl text-black text-center">Recent Works</h2>
          
      
            <div className="grid grid-cols-[1fr_2fr] gap-8 py-16 mt-12   max-w-4xl mx-auto   bg-linear-to-r from-gray-950 to-gray-600  rounded-xl shadow-xl  ">
       <div className="ml-6">
        <PhoneMockup mediaItems={frameContent}/>
        </div>     
      

    <div className="flex flex-col gap-6 pr-8">
  <h3 className="text-4xl font-medium text-center text-white"> Bus Tracker app</h3>
 <p className="text-gray-200 text-lg text-justify leading-relaxed ">A map-centric mobile app allowing passengers to track live-location of buses, get estimated arrival times, and easily locate bus stops on the map and request
navigation directions to bus stops.</p>

<p className="text-gray-200 text-lg text-justify leading-relaxed ">Built with Google Directions API for navigation assistance and ETA calculations, the app handles multiple buses and stops smoothly, providing a responsive, user-friendly experience</p>
{isVisible &&(<div >
  <p className="text-gray-200 text-lg text-justify leading-relaxed mb-6 " >The same application is used by bus drivers, with the phone transmitting the bus real-time location to the database system.</p>
   <p className="text-gray-200 text-lg text-justify leading-relaxed ">Other features include searching routes and viewing nearby bus stops on that route. Bus stops can also be saved as favorites</p>
   </div>
)
}
<div className="flex gap-4">
  {tools.map(tool=>
  {return <span className=" transform-gpu text-sm px-2 py-1 rounded-full text-gray-700 font-medium  bg-white/90 hover:rotate-5 transition-all duration-300 ease-in-out hover:cursor-context-menu">{tool}</span>}

  )}
</div>
<div className="flex gap-4">
  {features.map(feature=>
  {return <span className="will-change-transform text-sm px-2 py-1 rounded-full text-gray-700 font-medium  bg-white/90 hover:rotate-5 transition-all duration-300 ease-in-out ">{feature}</span>}

  )}
</div>



<button 
className="mt-12 px-6 py-3 bg-transparent border-2 text-white/90 rounded-lg w-fit 
      hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out flex justify-center items-center"
      onClick={()=>{setVisible(!isVisible)}}
     
     >
      {isVisible ? "Read Less" : "Read More"}
</button>
    </div>


</div>

        </motion.section>
    )



}