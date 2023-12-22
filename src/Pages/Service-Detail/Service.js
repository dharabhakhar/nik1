import React, { useEffect } from "react";
import ContactUs from "../Home/ContactUs";
import Solution from "../Home/Solution";
import Services from "../Home/Services";
import ScrollReveal from 'scrollreveal';

export default function Service() {
  useEffect(() => {
    const config = {
        delay: 300,
        distance: '100px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000, 
        easing: 'ease-in-out', 
        reset: true 
      };
ScrollReveal().reveal('.scroll-bottom-to-top2', config)
}, []);
useEffect(() => {
    document.title = 'Our Services'; 
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
        {/* <div class="bg-subpage"></div> */}
         {/*<div class="heading-title heading-service-title pt-60">
          <div class="container text-center">
            <div class="category caption1 fw-700 text-blue bg-blue-surface display-inline-block pt-4 pb-4 pl-10 pr-10 bora-8">
              Accounting Solution
            </div>
            <div class="title heading2 text-center mt-12">
              Services
            </div>
          </div>
        </div>
        <About/>
        <ChooseUs/>
        <Benefit/>
        <Support/>
        <ContactUs/> */}
        
        <Solution/>
        <div className="scroll-bottom-to-top2">
                <Services/>
                </div>
                <div className="scroll-bottom-to-top2">
                <ContactUs/>
                </div>
      </div>
    </>
  );
}
