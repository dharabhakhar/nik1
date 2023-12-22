import React from 'react'
import { PiCrosshair, PiShieldCheck, PiTrophy, PiUsers } from 'react-icons/pi'

export default function Journey2() {
    const Journey = [
        {icon:<PiUsers /> , head:'Customer Centricity' , text:'Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver Accounting solutions that meet and exceed their expectations. Their success is our success.'},
        {icon:<PiTrophy /> , head:'Quality Assurance' , text:'We have a relentless commitment to quality. We set high standards and rigorously test and monitor our Accounting services to ensure they meet those standards. Quality is non-negotiable.'},
        {icon:<PiCrosshair /> , head:'Client Focus' , text:'Our clients are the center of our Accounting universe. We listen to their needs, provide tailored solutions, and stand by them every step of the way. Their success is our success, excellence, integrity.'},
        {icon:<PiShieldCheck /> , head:'Integrity Always' , text:'Integrity is the foundation of trust. We operate with complete transparency, ensuring the highest ethical standards in all. Our clients rely on us for honesty and fairness.'},
    ]
  return (
    <>
        <div className="our-value-block bg-linear pt-80 pb-80">
        <div className="container"> 
          <div className="heading text-center">
            <div className="heading3 text-center">Our Journey Through Time</div>
            <div className="text-center mt-12">Discover exceptional experiences through testimonials from our satisfied customers.</div>
          </div>
          <div className="list-values row row-gap-32 mt-40"> 
          {
            Journey.map((item,i)=>{
                return(
                    <>
                    <div className="col-12 col-xxl-3 col-sm-6">
              <div className="item bg-white p-32 bora-20 h-100"><i className="text-blue fs-60">{item.icon}</i>
                <div className="heading5 fw-600 mt-24">{item.head}</div>
                <div className="text-on-surface-variant1 mt-12">{item.text}</div>
              </div>
            </div>
                    </>
                )
            })
          }
          </div>
        </div>
      </div>
    </>
  )
}
