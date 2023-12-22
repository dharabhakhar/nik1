import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

export default function Journey() {
    useEffect(() => {
        const config = {
            delay: 300,
            distance: '100px',
            origin: 'bottom',
            opacity: 0,
            duration: 1000, // Adjust the duration as needed
            easing: 'ease-in-out', // Use a suitable easing function
            reset: false // Ensures the reveal effect triggers every time the element is scrolled into view
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
    reset: false // Ensures the reveal effect triggers every time the element is scrolled into view
  })

// Scroll right to left
ScrollReveal().reveal('.scroll-right-to-left4', {
    delay: 500,
    distance: '100px',
    origin: 'right',
    opacity: 0,
    duration: 1000, // Adjust the duration as needed
    easing: 'ease-in-out', // Use a suitable easing function
    reset: false // Ensures the reveal effect triggers every time the element is scrolled into view
  })
      }, []);
  return (
    <>
        <div class="history-block pt-80 pb-80"> 
        <div class="container"> 
          <div class="row flex-center"> 
            <div class="col-lg-10 col-md-12">
              <div class="heading text-center"> 
                <div class="heading3 text-center">Our Journey Through Time</div>
                <div class="body2 text-on-surface-variant1 text-center mt-16">Tracing the Path of Our Legacy and Growth</div>
              </div>
              <div class="content-main mt-40"> 
                <div class="row flex-between row-gap-24">
                  <div class="col-md-6 pr-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-end">
                      <div class="text-on-surface-variant1">02/2016</div>
                      <div class="heading5">The Early Days</div>
                      <div class="text-on-surface-variant1 mt-12">In the early years, we were a small team with a big vision. We started with a handful of passionate individuals determined to make a difference.</div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-125">
                    <div class="bg-img scroll-right-to-left4"><img class="w-100 bora-20" src={require("../../images/blog/item16.png")} alt=""/></div>
                  </div>
                </div>
                <div class="row flex-between row-gap-24 pt-40">
                  <div class="col-md-6 pr-125">
                    <div class="bg-img scroll-left-to-right4"><img class="w-100 bora-20" src={require("../../images/blog/item11.png")} alt=""/></div>
                  </div>
                  <div class="col-md-6 pl-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-start">
                      <div class="text-on-surface-variant1">08/2019</div>
                      <div class="heading5">Growth and Expansion</div>
                      <div class="text-on-surface-variant1 mt-12">We expanded our operations, both in terms of scope and geography, to better serve the evolving needs of our clients.</div>
                    </div>
                  </div>
                </div>
                <div class="row flex-between row-gap-24 pt-40">
                  <div class="col-md-6 pr-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-end">
                      <div class="text-on-surface-variant1">04/2022</div>
                      <div class="heading5">Adapting to Change</div>
                      <div class="text-on-surface-variant1 mt-12">We embraced emerging technologies, implemented sustainable practices, and fostered a culture of innovation that has allowed us to stay ahead cuve.</div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-125">
                    <div class="bg-img scroll-right-to-left4"><img class="w-100 bora-20" src={require("../../images/blog/item14.png")} alt=""/></div>
                  </div>
                </div>
                <div class="row flex-between row-gap-24 pt-40">
                  <div class="col-md-6 pr-125">
                    <div class="bg-img scroll-left-to-right4"><img class="w-100 bora-20" src={require("../../images/blog/item15.png")} alt=""/></div>
                  </div>
                  <div class="col-md-6 pl-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-start">
                      <div class="text-on-surface-variant1">06/2022</div>
                      <div class="heading5">Our Team</div>
                      <div class="text-on-surface-variant1 mt-12">They are the heart of our organization, and their unwavering commitment to excellence has been the driving force behind our growth.</div>
                    </div>
                  </div>
                </div>
                <div class="row flex-between row-gap-24 pt-40">
                  <div class="col-md-6 pr-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-end">
                      <div class="text-on-surface-variant1">12/2022</div>
                      <div class="heading5">Client-Centric Approach</div>
                      <div class="text-on-surface-variant1 mt-12">We have always placed their needs and satisfaction at the center of everything we do. Their trust and loyalty have been instrumental in our journey.</div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-125">
                    <div class="bg-img scroll-right-to-left4"><img class="w-100 bora-20" src={require("../../images/blog/item13.png")} alt=""/></div>
                  </div>
                </div>
                <div class="row flex-between row-gap-24 pt-40">
                  <div class="col-md-6 pr-125">
                    <div class="bg-img scroll-left-to-right4"><img class="w-100 bora-20" src={require("../../images/blog/item12.png")} alt=""/></div>
                  </div>
                  <div class="col-md-6 pl-125 text-content-block scroll-bottom-to-top2">
                    <div class="text-content text-start">
                      <div class="text-on-surface-variant1">04/2023</div>
                      <div class="heading5">Looking Ahead</div>
                      <div class="text-on-surface-variant1 mt-12">We remain dedicated to pushing boundaries, delivering unmatched  IT Solution, and continuing to be a partner in the success of our clients.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="heading5 text-center mt-40 pr-80 pl-80 pl-col-lg-0 pr-col-lg-0">Thank you for being a part of our history, and we look forward to a future filled with shared successes and continued excellence.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
