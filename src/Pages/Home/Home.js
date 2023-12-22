import ContactUs from "./ContactUs";
import { About } from "./About";
import { Benefit } from "./Benefit";
import Services from "./Services";
import { Slider } from "./Slider";
import Solution from "./Solution";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export function Home () {
    useEffect(() => {
        const config = {
            delay: 300,
            distance: '100px',
            origin: 'bottom',
            opacity: 0,
            duration: 1000, // Adjust the duration as needed
            easing: 'ease-in-out', // Use a suitable easing function
            reset: true // Ensures the reveal effect triggers every time the element is scrolled into view
          };
        // Scroll bottom to top 
    ScrollReveal().reveal('.scroll-bottom-to-top2', config)
}, []);
    useEffect(() => {
        document.title = 'N D Bhakhar & Co'; 
      }, []);
    return(
        <>
             <div id="content" className="mt-[130px]">
             <div>
                <Slider/>
                </div>
                <div className="scroll-bottom-to-top2">
                <About/>
                </div>
                <div className="scroll-bottom-to-top2">
                <Benefit/>
                </div>
                <div className="scroll-bottom-to-top2">
                <Solution/>
                </div>
                <div className="scroll-bottom-to-top2">
                <Services/>
                </div>
                <div className="scroll-bottom-to-top2">
                <ContactUs/>
                </div>
             </div>
        </>
    )
}