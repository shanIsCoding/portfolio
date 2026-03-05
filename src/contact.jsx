import {PhoneCall,Mail,MapPin,UserSearch} from "lucide-react"
import{motion,useInView} from "motion/react"
import { useRef, React} from "react"

export function Contact(){

    const ref= useRef(null);
    const isInView=useInView(ref,{once:false,amount:0.4})
    return(
        <motion.section id="contact"
         ref={ref} 
         className="scroll-mt-32 min-h-screen mt-30"
         initial={{opacity:0,scale:0.9}}
         animate={
            isInView ? {opacity:1,scale:1} :{opacity:0,scale:0.9}
         }
          transition={{duration:0.8, ease:"easeOut"}}
         
         >
            <h3 className="text-5xl text-center mb-4">Get In Touch</h3>
           <h4 className="text-lg text-center mb-12 text-gray-500/80">Let’s work together — reach out below!</h4>
         <div className="flex flex-col gap-12  w-min px-6 py-16 bg-gray-950 mx-auto rounded-2xl ring-2 ring-black shadow-2xl">
         <div className="flex bg-linear-to-r from-gray-700 to-gray-600 py-6 px-6 justify-start rounded-2xl animate-[enlarge_2s_ease-in-out_infinite] ">
            <Mail color="white" size={30} className="mr-6"/>
            <p className="text-white">shanputten22@gmail.com</p>
         </div>
<div className="flex  bg-linear-to-r from-gray-700 to-gray-600 py-6 px-6 justify-start rounded-2xl animate-[enlarge_2s_ease-in-out_infinite]">
            <PhoneCall color="white" size={30} className="mr-6 "/>
            <p className="text-white">(+230) 54792185</p>
         </div>

<div className="flex bg-linear-to-r from-gray-700 to-gray-600 py-6 px-6 justify-start rounded-2xl animate-[enlarge_2s_ease-in-out_infinite] ">
            <MapPin color="white"  size={30} className="mr-6"/>
            <p className="text-white">Beau-Bassin, Mauritius</p>
         </div>
         </div>
        </motion.section>
    )

}