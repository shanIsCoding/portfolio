import { Hero } from './hero.js'
import { Header } from './header.jsx'
import { About } from './about.jsx'
import { Skills } from './skills.jsx'
import { Contact } from './contact.jsx'
import { Frame } from './Frame.jsx'
import { Projects } from './projects.jsx'


export function Application(){

    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
         <Skills/>
        
        <Contact/>
       
        {/* <App/> */}
        
        </>

    )
}