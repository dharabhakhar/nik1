import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import Mission from "./Mission";
import Journey2 from "./Journey2";
import ContactUs from "../Home/ContactUs";

export default function AboutUs() {
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

// Scroll left to right
ScrollReveal().reveal('.scroll-left-to-right4', {
delay: 500,
distance: '100px',
origin: 'left',
opacity: 0,
duration: 1000, // Adjust the duration as needed
easing: 'ease-in-out', // Use a suitable easing function
reset: true // Ensures the reveal effect triggers every time the element is scrolled into view
})

// Scroll right to left
ScrollReveal().reveal('.scroll-right-to-left4', {
delay: 500,
distance: '100px',
origin: 'right',
opacity: 0,
duration: 1000, // Adjust the duration as needed
easing: 'ease-in-out', // Use a suitable easing function
reset: true // Ensures the reveal effect triggers every time the element is scrolled into view
})
  }, []);
  useEffect(() => {
    document.title = 'About Us'; 
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
        <div className="bg-subpage"></div>
        <div className="heading-title pt-60">
          <div className="container text-center">
            <div className="title heading2 text-center">About Us</div>
            <div className="desc body2 text-on-surface-variant1 mt-12">
              Discover our story, our mission, and our passion for creativity
              and innovation
            </div>
          </div>
        </div>
        <div className="heading-content pt-60">
          <div className="container">
            <div className="content-main style-one bg-white bora-24 overflow-hidden">
              <div className="row row-gap-40 flex-between">
                <div className="col-lg-6 pr-40 pr-col-lg-0 flex-center">
                  <div className="text-content pl-80 pt-80 pb-80">
                    <div className="category caption1 fw-700 text-blue bg-blue-surface display-inline-block pt-4 pb-4 pl-12 pr-12 bora-4">
                      About Us
                    </div>
                    <div className="name heading3 mt-16">
                      Elevating Small and Mid-Sized Companies through Tailored
                      Accounting Services
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-img">
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={require("../../images/about.jpg")}
                      alt="Elevating Small and Mid-Sized Companies through Tailored IT Services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bottom-to-top2">
        <Journey2/>
        </div>
        <div className="scroll-bottom-to-top2">
        <Mission/>
        </div>
        <div className="scroll-bottom-to-top2">
        <ContactUs/>
        </div>
      </div>
    </>
  );
}
