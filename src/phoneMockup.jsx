import { useEffect,useState,useRef } from "react"
import frame1 from "./assets/frame.png"
export function PhoneMockup({mediaItems}){

   
   
    //validate media Items
   if(!Array.isArray(mediaItems) ||mediaItems.length===0){
    console.log("PhoneMockup:mediaItems is missing or invalid")
   }
   const isValid= mediaItems.every(
    item=>item.src && item.type && item.duration
   );
   if(!isValid){
    console.log("PhoneMockup:some media items are invalid", mediaItems)
   return null;
}
 const [isIndex,setIndex]=useState(0);
useEffect(
        ()=>{

             const timer= setTimeout(
            ()=>{
                setIndex(
                    prev=>prev===mediaItems.length-1 ? 0 :prev+1
                );
            },mediaItems[isIndex].duration);
            return ()=> clearTimeout(timer);
        }


    ,[isIndex]);

    return(
        <div className=" relative h-[60vh]  w-fit mt-6 ml-6   hover:scale-110  transition-all duration-300 ease-in-out rounded-lg shadow-md ">
        
          {/* Screen Area */}
          
           {/* Phone Frame (NO DISTORTION) */}
          <img
            src={frame1}
            alt="mobile frame"
            className="  relative z-5 h-full w-auto "
          />
          
          
          <div className="absolute top-[1%] bottom-[2%] left-[2%] right-[2%] rounded-[20px] overflow-hidden z-0 ">
            {mediaItems[isIndex].type==="image" ?
            (
              <img
              src={mediaItems[isIndex].src}
              className=" w-full h-full object-cover"
            />
             
            ) :(
              <video
              src={mediaItems[isIndex].src}
              autoPlay
              
              muted
              className=" w-full h-full object-cover"
              
              />
        
            )
          
          }
            
            
          </div>
        
         
        
        </div>



    )


}