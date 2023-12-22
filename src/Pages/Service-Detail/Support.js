import React, { useState } from 'react'
import { PiCheck } from 'react-icons/pi'

export default function Support() {
    const [isYearly, setIsYearly] = useState(false);
    const Gold =[
        {feature:'60 keywords'},
        {feature:'6,000 monthly website visitors'},
        {feature:'8 blogs / month'},
        {feature:'10 quality backlinks / month'},
        {feature:'Dedicated expert team'},
        {feature:'Monitoring & reporting'}
    ]

    const platinum = [
        {feature:'150 keywords'},
        {feature:'20,000 monthly website visitors'},
        {feature:'15 blogs / month'},
        {feature:'20 quality backlinks / month'},
        {feature:'Dedicated expert team'},
        {feature:'Monitoring & reporting'}
    ]

const handleSwitchClick = () => {
  setIsYearly(prevState => !prevState);
};
  return (
    <div className="section-pricing style-seven pt-80 pb-80 bg-yellow-surface">
        <div className="container"> 
          <div className="row flex-between">
            <div className="col-xl-4 col-12">
              <div className="heading">
                <div className="heading3">Reach Out for Support!</div>
                <div className="mt-16"> a comprehensive solution for your technical support needs. With this package, you'll experience dedicated assistance from our professional technical experts.</div>
                <div className="choose-type flex-item-center mt-16 gap-20">
                <div className={`text-title ${isYearly ? 'text-on-surface-variant1' : ''}`}>Pay Monthly</div>
                  <div className={`switch ${isYearly ? 'enable' : ''}`} onClick={handleSwitchClick}> 
                    <div className={`bg-white border-outline `}></div>
                  </div>
                  <div className={`text-title ${!isYearly ? 'text-on-surface-variant1' : ''}`}>Pay Yearly <span className="caption2">(Save 10%)</span></div>
                </div>
                <div className="list-feature d-flex flex-column gap-16 pt-32">
                  <div className="item flex-item-center gap-8"> <i className="fs-24 text-blue"><PiCheck /></i>
                    <div className="text-title">24/7 Support</div>
                  </div>
                  <div className="item flex-item-center gap-8">  <i className="fs-24 text-blue"><PiCheck /></i>
                    <div className="text-title">Professional Expertise</div>
                  </div>
                  <div className="item flex-item-center gap-8">  <i className="fs-24 text-blue"><PiCheck /></i>
                    <div className="text-title">Time and Resource Savings</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-12">
              <div className={`list-pricing ${!isYearly ? 'show' : 'hide'}`}>
                <div className="row row-gap-32">
                  <div className="col-md-6 col-12">
                    <div className="pricing-item bg-white p-32 bora-20 bg-white border-outline h-100">
                      <div className="heading5">Gold</div>
                      <div className="price mt-20">
                        <div className="heading2 text-blue">$149.00</div>
                        <div className="caption1 text-on-surface-variant1">/ per month</div>
                      </div>
                      <div className="list-feature mt-24 d-flex flex-column gap-12 pt-32">
                      {
                        Gold.map((item,i)=>{
                            return(
                                <>
                                <div className="item flex-item-center gap-8"> <i className="fs-24 text-blue"><PiCheck/></i>
                          <div className="feature">{item.feature}</div>
                        </div>
                                </>
                            )
                        })
                      }
                      </div><a className="button bg-blue text-white border-transparent mt-24" href="/pricing-plan">Choose Plan</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="pricing-item bg-white p-32 bora-20 border-outline h-100">
                      <div className="heading flex-between">
                        <div className="heading5">Platinum</div>
                        <div className="text-label bg-blue text-white pt-4 pb-4 pl-12 pr-12 bora-99 display-inline-block">Save 25%</div>
                      </div>
                      <div className="price mt-20">
                        <div className="heading2">$379.00</div>
                        <div className="caption1 text-on-surface-variant1">/ per month</div>
                      </div>
                      <div className="list-feature mt-24 d-flex flex-column gap-12 pt-32">
                      {
                        platinum.map((item,i)=>{
                            return(
                                <>
                                <div className="item flex-item-center gap-8"> <i className="fs-24 text-blue"><PiCheck/></i>
                          <div className="feature">{item.feature}</div>
                        </div>
                                </>
                            )
                        })
                      }
                      </div><a className="button mt-24" href="pricing-plan.html">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`list-pricing-year ${isYearly ? 'show' : 'hide'}`}>
                <div className="row row-gap-32">
                  <div className="col-md-6 col-12">
                    <div className="pricing-item bg-white p-32 bora-20 border-outline h-100">
                      <div className="heading5">Gold</div>
                      <div className="price mt-20">
                        <div className="heading2 text-blue">$1609.2</div>
                        <div className="caption1 text-on-surface-variant1">/ per year                        </div>
                      </div>
                      <div className="list-feature mt-24 d-flex flex-column gap-12 pt-32">
                      {
                        Gold.map((item,i)=>{
                            return(
                                <>
                                <div className="item flex-item-center gap-8"> <i className="fs-24 text-blue"><PiCheck/></i>
                          <div className="feature">{item.feature}</div>
                        </div>
                                </>
                            )
                        })
                      }
                      </div><a className="button bg-blue text-white border-transparent mt-24" href="pricing-plan.html">Choose Plan</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="pricing-item bg-white p-32 bora-20 border-outline h-100">
                      <div className="heading flex-between">
                        <div className="heading5">Platinum</div>
                        <div className="text-label bg-blue text-white pt-4 pb-4 pl-12 pr-12 bora-99 display-inline-block">Save 25%</div>
                      </div>
                      <div className="price mt-20">
                        <div className="heading2">$4093.2</div>
                        <div className="caption1 text-on-surface-variant1">/ per year                        </div>
                      </div>
                      <div className="list-feature mt-24 d-flex flex-column gap-12 pt-32">
                      {
                        platinum.map((item,i)=>{
                            return(
                                <>
                                <div className="item flex-item-center gap-8"> <i className="fs-24 text-blue"><PiCheck/></i>
                          <div className="feature">{item.feature}</div>
                        </div>
                                </>
                            )
                        })
                      }
                      </div><a className="button mt-24" href="pricing-plan.html">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
