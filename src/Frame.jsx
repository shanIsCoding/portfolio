import { useEffect,useState,useRef } from "react"
import { motion,useInView } from "motion/react"
import frame from "./assets/frame.png"
import m1 from "./assets/m1.jpg"
import m2 from "./assets/m2.jpg"
import m3 from "./assets/m3.jpg"
import v1 from "./assets/v1.mp4"
import v2 from "./assets/v2.mp4"

export function Frame(){

    const ref=useRef(null);
    const isInView=useInView(ref,{once:false,amount:0.2})

    const frameContent=[
    //  {src:m1, type:"image",duration:3000} ,
    //  {src:m2, type:"image",duration:3000},
    //  {src:m2, type:"image",duration:3000},
      {src:v1,type:"video",duration:8000},
      {src:v2, type:"video",duration:15000}
    ];
    const tools=["React native","Direction Api","Firebase","Expo"]
   const features=["Live-Tracking","Navigation Assistance","Search"]
    const [isIndex,setIndex]= useState(0);
    const [isVisible,setVisible]=useState(false);
    useEffect(
        ()=>{

             const timer= setTimeout(
            ()=>{
                setIndex(
                    prev=>prev===frameContent.length-1 ? 0 :prev+1
                );
            },frameContent[isIndex].duration);
            return ()=> clearTimeout(timer);
        }


    ,[isIndex]);

    

    return(
        <motion.section id="works" 
        className=" mt-30 scroll-mt-32"
        initial={{opacity:0,y:-50}}
        ref={ref}
        animate={
          isInView ? { opacity:1, y:0}
          :{opacity:0,y:50}

        }
        transition={{duration:0.8, ease:"easeOut"}}
        >
            <h2 className="text-5xl text-black text-center">Recent Works</h2>
          
      
            <div className="grid grid-cols-[1fr_2fr] gap-10 py-16 mt-12   max-w-4xl mx-auto   bg-linear-to-r from-gray-950 to-gray-600  rounded-xl shadow-xl  ">
            
<div className=" relative h-[60vh]  w-fit mt-6 ml-6   hover:scale-110  transition-all duration-300 ease-in-out rounded-lg shadow-md ">

  {/* Screen Area */}
  
   {/* Phone Frame (NO DISTORTION) */}
  <img
    src={frame}
    alt="mobile frame"
    className="  relative z-5 h-full w-auto "
  />
  
  
  <div className="absolute top-[1%] bottom-[2%] left-[2%] right-[2%] rounded-[20px] overflow-hidden z-0 ">
    {frameContent[isIndex].type==="image" ?
    (
      <img
      src={frameContent[isIndex].src}
      className=" w-full h-full object-cover"
    />
     
    ) :(
      <video
      src={frameContent[isIndex].src}
      autoPlay
      muted
      loop
      className=" w-full h-full object-cover"
      
      />

    )
  
  }
    
    
  </div>

 

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


  {/* <div className="h-screen border-2 border-amber-200 ">
        <div className=" group border-2 relative h-3/4 px-6 ">
        <img
        src={frameImages[isIndex]}
        className="z-0 h-[96%] mt-3 hover:scale-110 transition-all duration-300 ease-in-out"
        />

            
            <img
            src={frame}
            alt="mobile frame"
            className=" absolute z-5 h-full top-0 hover:scale-110 transition-all duration-300 ease-in-out"
        
            />
   </div>
            </div> */}