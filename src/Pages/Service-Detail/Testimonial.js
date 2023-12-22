import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { PiStarFill } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    const [activeAvatarIndex, setActiveAvatarIndex] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
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
    beforeChange: (current, next) => {
      setActiveAvatarIndex(next); // Update the active avatar index based on the next slide
    },
  };

  const avatarImages = [
    'IMG-6.png',
    'IMG-9.png',
    'IMG-2.png',
    // Add other avatar image filenames here
  ];

  const changeAvatarTestimonial = (index) => {
    setActiveAvatarIndex(index);
  };

  const listAvatars = avatarImages.map((avatar, index) => (
    <div
      key={index}
      className={`bg-img ${activeAvatarIndex === index ? 'active' : ''}`}
      data-name={index}
      onClick={() => changeAvatarTestimonial(index)}
    >
      <img src={require(`../../images/avatar/${avatar}`)} alt={`Avatar ${index}`} />
    </div>
  ));

  useEffect(()=>{
    const dots = document.querySelectorAll('.section-testimonial.style-one .slick-dots li button')
    if (dots) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeAvatarTestimonial(index)
        })
    })
}
  },[])
  return (
    <div class="style-case-studies pb-80">
        <div class="section-testimonial style-one style-four section-testimonial-shared bg-white pt-80 pb-80">
          <div class="container"> 
            <div class="cursor-testimonials flex-center gap-12"><i class="ph ph-caret-left text-white"></i><i class="ph ph-caret-right text-white"></i></div>
            <div class="row flex-between"> 
              <div class="col-sm-6 col-12">
                <div class="testimonial-item overflow-hidden bora-32">
                <Slider {...settings}>
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i></div>
                    <div class="heading4 mt-24">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div class="infor mt-16">
                      <div class="heading6">Christina Smith</div>
                      <div class="text-on-surface-variant1">CEO Digital Avitex</div>
                    </div>
                  </div>
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i></div>
                    <div class="heading4 mt-24">Their expertise in market analysis and tailored solutions propelled our growth and competitiveness.</div>
                    <div class="infor mt-16">
                      <div class="heading6">Alexander Parker</div>
                      <div class="text-on-surface-variant1">Designer FPT</div>
                    </div>
                  </div>
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i><i class="text-yellow fs-20"><PiStarFill/></i></div>
                    <div class="heading4 mt-24">These consultants are true partners in success. Their thorough understanding of industry coupled.</div>
                    <div class="infor mt-16">
                      <div class="heading6">Georgina Rodriguez </div>
                      <div class="text-on-surface-variant1">CEO AliTechnology</div>
                    </div>
                  </div>
                  </Slider>
                </div>
              </div>
              <div class="col-sm-5 col-12 pl-65 pl-col-lg-0">
              <div className="list-avatar">
                {listAvatars}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
