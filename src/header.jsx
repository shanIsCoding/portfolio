import { useEffect,useState } from "react"




export function Header(){

    const [isScrolled,setIsScrolled]=useState(false);
   useEffect(
    ()=>{
        //define a function to detect scroll
       
            window.addEventListener('scroll',
                ()=>{
                    scrollY>50 ? setIsScrolled(true) : setIsScrolled(false)

                }
            )
        }
    
,[])



    const navItems=[

        {  label:"Home", id:"home" },
        {label:"About", id:"about"},
        {label:"Projects", id:"projects"},
        // {label:"Skills", id: "skills"},
        {label:"Contact", id: "contact"}



    ]

    function scrollToSection(id)
    {
        const element =document.getElementById(id);
        if(id && typeof(id)==="string")
        {
            element.scrollIntoView({behavior:'smooth'})
        }

    }

    return(
       <header
  className={`fixed top-0 left-0 right-0 w-full z-10 px-14 py-4 ${
    isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md text-black' : 'bg-transparent text-white'
  } transition-colors duration-300 ease-in-out`}
>
      <nav className=" flex items-center justify-between max-w-3xl mx-auto  " >
        {

            navItems.map((item)=>
                <button 
                className="px-2 pt-4  hover:-translate-y-1 transition-all  hover:text-black cursor-pointer duration-300 ease-in-out md:text-lg"
                key={item.id}
                onClick={()=>scrollToSection(item.id)}
                
                > 
                
                {item.label}

                </button>
               


            )
        }
      </nav>
      
       </header>
    )
}