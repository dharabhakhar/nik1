import React from 'react'
import { PiChartLineUp, PiCloudCheck, PiPiggyBank, PiTrophy } from 'react-icons/pi'

export default function Benefit() {
  return (
    <div class="our-value-block bg-linear-gradient pt-80 pb-80">
        <div class="container"> 
          <div class="heading text-center">
            <div class="heading3 text-center">Our Benefit</div>
            <div class="text-center mt-12">Discover exceptional experiences through testimonials from our satisfied customers.</div>
          </div>
          <div class="list-values row row-gap-32 mt-40"> 
            <div class="col-12 col-xxl-3 col-sm-6">
              <div class="item bg-white p-32 bora-20 h-100"><i class="text-blue fs-60"><PiChartLineUp /></i>
                <div class="heading5 fw-600 mt-24">Increased Efficiency</div>
                <div class="text-on-surface-variant1 mt-12"> Industry 4.0 technologies boost production efficiency, reducing lead times and production costs.</div>
              </div>
            </div>
            <div class="col-12 col-xxl-3 col-sm-6">
              <div class="item bg-white p-32 bora-20 h-100"><i class="text-blue fs-60"><PiTrophy /></i>
                <div class="heading5 fw-600 mt-24">Improved Quality</div>
                <div class="text-on-surface-variant1 mt-12">We have a relentless commitment to quality. We set high standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality is non-negotiable.</div>
              </div>
            </div>
            <div class="col-12 col-xxl-3 col-sm-6">
              <div class="item bg-white p-32 bora-20 h-100"><i class="text-blue fs-60"><PiCloudCheck /></i>
                <div class="heading5 fw-600 mt-24">Digital Twin</div>
                <div class="text-on-surface-variant1 mt-12">Staying at the forefront of manufacturing technology gives you a competitive edge in the market.</div>
              </div>
            </div>
            <div class="col-12 col-xxl-3 col-sm-6">
              <div class="item bg-white p-32 bora-20 h-100"><i class="text-blue fs-60"><PiPiggyBank /></i>
                <div class="heading5 fw-600 mt-24">Cost Savings</div>
                <div class="text-on-surface-variant1 mt-12">Predictive maintenance and optimized resource allocation reduce operational costs.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pt-80">
          <div class="row"> 
            <div class="col-4 pr-32 pr-col-lg-0">
              <div class="heading4">Outstanding Customer Service Recognition</div>
            </div>
            <div class="col-8 pl-0 pl-col-lg-0">
              <div class="list-award flex-between"> 
                <div class="bg-img"> <img class="w-120 h-120" src={require("../../images/award/1.png")} alt=""/></div>
                <div class="bg-img"> <img class="w-120 h-120" src={require("../../images/award/2.png")} alt=""/></div>
                <div class="bg-img"> <img class="w-120 h-120" src={require("../../images/award/3.png")} alt=""/></div>
                <div class="bg-img"> <img class="w-120 h-120" src={require("../../images/award/4.png")} alt=""/></div>
                <div class="bg-img"> <img class="w-120 h-120" src={require("../../images/award/5.png")} alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
