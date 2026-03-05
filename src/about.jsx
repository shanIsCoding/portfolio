import{motion, useInView} from 'motion/react';
import { useRef } from 'react';
import shan2 from "./assets/shan2.png"
import { SkillCard } from "./SkillCard"

export function About(){

  const ref=useRef(null);
  const isInView=useInView(ref,{once:true,amount:0.3})
;
    return(
        
        <section 
        id="about" ref={ref} 
        className=" mt-30 scroll-mt-32  px-12 max-w-7xl  mx-auto "
       
        
        
        >
        <motion.h2 
        className="text-5xl text-black text-center"
         initial={{opacity:0,y:50}}
        animate={
          isInView ? { opacity:1, y:0}
          :{}

        }
        transition={{duration:0.8, ease:"easeOut"}}
        >
          
          About Me</motion.h2>
      <motion.div 
      className="grid grid-cols-[1fr_2fr] gap-10 mt-12  max-w-4xl mx-auto items-center bg-gray-200/30 rounded-xl shadow-lg  "
       initial={{opacity:0,y:50}}
        animate={
          isInView ? { opacity:1, y:0}
          :{}

        }
        transition={{duration:0.8, ease:"easeOut"}}
      >
         <div className=" py-4" >
            <img
            src={shan2}
            alt="developer profile picture"
            className="  rounded-[100%] shadow-2xl shadow-black/30 object-cover my-auto"
            />      
        </div>
      
         <div className=" flex flex-col px-2 py-4 ">
            
            <p className="text-gray-600 text-lg text-justify leading-relaxed ">I am a fresh Computer Science graduate with a particular interest in software development and mobile app building,with a keen focus on functionality and design. </p>
           <p className="text-gray-600 text-lg text-justify  leading-relaxed mt-4">While interning at Sd Worx, I became familiar with the agile way of working, while collaborating with teammates and colleagues to deliver quality works </p> 
         <p className="text-gray-600 text-lg text-justify  leading-relaxed mt-4">I am excited about the opportunity to bring my skills, enthusiasm, and
commitment to learning to the company. I look forward to being part of a
team where I can apply my abilities, work collaboratively, and provide value
that reflects the trust and investment of the company.</p>



         </div>
      </motion.div>

     
   
   
    </section>
    )
}
