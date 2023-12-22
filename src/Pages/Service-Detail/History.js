import React from 'react'
import { PiCheck, PiPlayFill } from 'react-icons/pi'

export default function History() {
  return (
    <div className="style-about-us pt-60">
        <div className="section-about style-seven-first"> 
          <div className="container"> 
            <div className="row row-gap-40 p-80">
              <div className="col-12 col-lg-6 pr-65 pr-col-lg-0">
                <div className="heading3">100 Years Of History Serving The Poconos Region</div>
                <div className="bg-img mt-28 video-block"><img className="w-100" src={require("../../images/component/about3.png")} alt=""/><i className=" text-white fs-28 bg-on-surface bora-50 flex-center"><PiPlayFill /></i>
                  <div className="text-title text-white">Tony Nguyen, CEO, Bytewave</div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="content p-40">
                  <div className="heading3">Unlock your financial potential today!</div>
                  <div className="list-feature mt-28">
                    <div className="d-flex"> <i className=" text-blue fs-20 pt-4"><PiCheck /></i>
                      <div className="text-title pl-8">Supported by experienced financial experts.</div>
                    </div>
                    <div className="d-flex mt-24"><i className=" text-blue fs-20 pt-4"><PiCheck /></i>
                      <div className="text-title pl-8">Optimizing investment portfolios and assets.</div>
                    </div>
                    <div className="d-flex mt-24"><i className=" text-blue fs-20 pt-4"><PiCheck /></i>
                      <div className="text-title pl-8">Building stable financial plans for the future.</div>
                    </div>
                    <div className="d-flex mt-24"><i className=" text-blue fs-20 pt-4"><PiCheck /></i>
                      <div className="text-title pl-8">Ensuring financial security through suitable insurance.</div>
                    </div>
                    <div className="d-flex mt-24"><i className=" text-blue fs-20 pt-4"><PiCheck /></i>
                      <div className="text-title pl-8">Supported by experienced financial experts.</div>
                    </div>
                    <div className="block-button mt-36"><a className="button bg-blue button-blue-hover text-white border-none" href="service-detail.html">Our Services</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
