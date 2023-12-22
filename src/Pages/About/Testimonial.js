import React from 'react'
import Slider from "react-slick";

export default function Testimonial() {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        grab: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
      };
  return (
    <div className="style-about-us">
        <div className="section-slide-shared section-testimonial style-two style-six pt-80 pb-80">
          <div className="container"> 
            <div className="cursor flex-center gap-12"><i className="ph ph-caret-left text-white"></i><i className="ph ph-caret-right text-white"></i></div>
            <div className="heading3 text-center">Testimonials</div>
            <div className="text-center mt-8">Discover exceptional experiences through testimonials from our satisfied customers.</div>
            <div className="list-comment mt-40">
            <Slider {...settings}>
              <div className="col">
                <div className="item pl-32 pr-32 pt-40 pb-40 bg-white bora-16 flex-item-center gap-20 border-outline"><img className="bora-50 w-120 h-120 object-fit-cover display-block" src={require("../../images/avatar/avatar1.png")} alt=""/>
                  <div className="content">
                    <div className="star flex-item-center gap-1"><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i></div>
                    <div className="body2 mt-12">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div className="infor mt-12">
                      <div className="text-title">Christina Smith</div>
                      <div className="caption1 text-on-surface-variant1">CEO Digital Avitex</div>
                      <div className="double-slash"><i className="icon-slash-bora"></i><i className="icon-slash-bora"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item pl-32 pr-32 pt-40 pb-40 bg-white bora-16 flex-item-center gap-20 border-outline"><img className="bora-50 w-120 h-120 object-fit-cover display-block" src={require("../../images/avatar/avatar2.png")} alt=""/>
                  <div className="content">
                    <div className="star flex-item-center gap-1"><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i></div>
                    <div className="body2 mt-12">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div className="infor mt-12">
                      <div className="text-title">Christina Smith</div>
                      <div className="caption1 text-on-surface-variant1">CEO Digital Avitex</div>
                      <div className="double-slash"><i className="icon-slash-bora"></i><i className="icon-slash-bora"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item pl-32 pr-32 pt-40 pb-40 bg-white bora-16 flex-item-center gap-20 border-outline"><img className="bora-50 w-120 h-120 object-fit-cover display-block" src={require("../../images/avatar/avatar3.png")} alt=""/>
                  <div className="content">
                    <div className="star flex-item-center gap-1"><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i></div>
                    <div className="body2 mt-12">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div className="infor mt-12">
                      <div className="text-title">Christina Smith</div>
                      <div className="caption1 text-on-surface-variant1">CEO Digital Avitex</div>
                      <div className="double-slash"><i className="icon-slash-bora"></i><i className="icon-slash-bora"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item pl-32 pr-32 pt-40 pb-40 bg-white bora-16 flex-item-center gap-20 border-outline"><img className="bora-50 w-120 h-120 object-fit-cover display-block" src={require("../../images/avatar/avatar4.png")} alt=""/>
                  <div className="content">
                    <div className="star flex-item-center gap-1"><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i><i className="ph-fill ph-star fs-20 text-yellow"></i></div>
                    <div className="body2 mt-12">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div className="infor mt-12">
                      <div className="text-title">Christina Smith</div>
                      <div className="caption1 text-on-surface-variant1">CEO Digital Avitex</div>
                      <div className="double-slash"><i className="icon-slash-bora"></i><i className="icon-slash-bora"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
  )
}
