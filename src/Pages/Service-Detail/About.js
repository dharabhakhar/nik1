import React from 'react'

export default function About() {
  return (
    <div className="section-about style-seven-second pt-80">
        <div className="container"> 
          <div className="row row-gap-40 flex-between">
            <div className="col-12 col-lg-7 pr-65 pr-col-lg-0">
              <div className="text-label bg-black-10percents text-on-surface-variant1 pt-4 pb-4 pl-12 pr-12 display-inline-block">About US</div>
              <div className="heading3 mt-20">Simplify Tech Challenges with Our Responsive Help Desk Team</div>
              <div className="desc mt-20">Welcome to Bytewave, your trusted companion in the realm of IoT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art IoT solutions that propel the future of your business.</div>
              <div className="counter d-flex mt-16">
                <div className="item"> 
                  <div className="heading3">20</div>
                  <div className="text-title mt-4">Years experiences</div>
                </div>
                <div className="item pl-40">
                  <div className="heading3">1.8<span>k</span></div>
                  <div className="text-title mt-4">Happy customers</div>
                </div>
              </div><a className="button mt-40" href="our-team.html">Meet our team</a>
            </div>
            <div className="col-12 col-lg-5 col-md-8 col-sm-10"><img className="w-100" src={require("../../images/component/about-second7.png")} alt="img"/></div>
          </div>
        </div>
      </div>
  )
}
