import {React, useRef }from "react";
import { SkillCard } from "./SkillCard";
import{motion,useInView} from "motion/react"


export function Skills(){


const ref= useRef(null);
const isInView=useInView(ref,{once:true,amount:0.3})
    const skills=[
        
        {title:"Programming Languages", points:["JavaScript","TypeScript","SQL","C++","Java"] },
        {title:"Frontend & Mobile", points:["React","React-Native","Tailwind Css","Html","Css"]},
        {title:"Backend",points:["Node.js","Express.js","Authentication(JWT,bcrypt)","middleware"]},
        {title:"Databases",points:["PostgreSQL","Prisma ORM","Firebase"]}



]
    
    
    return(
         <motion.section
         id="skills" 
         ref={ref}
         className="mt-30 mx-auto scroll-mt-24 "
         initial={{opacity:0,x:-30}}
         animate={
            isInView ? {opacity:1, x:0}: {}
         }
          transition={{duration:1.0, ease:"easeInOut"}}

         
         >
        <h3 className=" text-5xl text-center mb-4">Skills</h3>
        <h4 className="text-lg text-center mb-12 text-gray-500/80">Technologies i worked with</h4>
         <div className="grid grid-cols-2 gap-20 max-w-2xl mx-auto">
         {skills.map(
           skill=><SkillCard
           
           key={skill.title}
           
           {...skill} />


         )}


         </div>
        
         </motion.section>
    
    )
}