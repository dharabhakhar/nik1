import React, { useEffect, useRef } from "react";
import { PiEnvelopeBold, PiMapPinBold, PiPhoneBold } from "react-icons/pi";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_0x63t57', 'template_zi0kwwp', form.current, 'VoGsm1xhQrw3MWjnt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <>
      <div id="content" className="mt-[74px]">
        <div class="bg-subpage"></div>
        <div class="form-contact-us pt-80">
          <div class="container">
            <div class="row flex-between row-gap-32">
              <div class="col-12 col-lg-5">
                <div class="infor">
                  <div class="heading">
                    <div class="caption1 fw-700 text-blue bg-blue-surface display-inline-block pt-4 pb-4 pl-10 pr-10 bora-8">
                      Contact Us
                    </div>
                    <div class="heading2 mt-16">We’d love to help</div>
                    <div class="body2 mt-16">
                    Contact us and let's make conversations. Send us a message or just say hello, please do complete the form or contact us via details given above.
                    </div>
                  </div>
                  <div class="style-contact-us">
                    <div class="list-social flex-item-center gap-10 mt-28">
                      <a
                        class="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="icon-facebook"></i>
                      </a>
                      <a
                        class="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="icon-linkedin"></i>
                      </a>
                      <a
                        class="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="icon-twitter"></i>
                      </a>
                      <a
                        class="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="icon-youtube"></i>
                      </a>
                      <a
                        class="item bora-50 w-40 h-40 flex-center border-on-surface"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="icon-instagram fs-14"></i>
                      </a>
                    </div>
                  </div>
                  <div class="list-more-infor mt-40">
                    <div class="item flex-item-center">
                      <i class="text-white bg-blue p-12 bora-50">
                        <PiPhoneBold />
                      </i>
                      <div class="body2">90546 84292</div>
                    </div>
                    <div class="item flex-item-center mt-20">
                      <i class="text-white bg-blue p-12 bora-50">
                        <PiEnvelopeBold />
                      </i>
                      <div class="body2">canvbhakhar@gmail.com</div>
                    </div>
                    <div class="item flex-item-center mt-20">
                      <i class="text-white bg-blue p-12 bora-50">
                        <PiMapPinBold />
                      </i>
                      <div class="body2">
                      109, Apple square, near Yogi chowk, Surat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5">
                <form class="form-block bg-white bora-16 p-40" ref={form} onSubmit={sendEmail}>
                  <div class="row row-gap-24">
                    <div class="col-12 col-sm-6">
                      <input
                        class="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        class="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div class="col-12">
                      <input
                        class="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        type="text"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                    <div class="col-12">
                      <textarea
                        class="w-100 bg-surface text-secondary caption1 pl-16 pr-16 pt-12 pb-12 bora-8"
                        name="message"
                        cols="10"
                        rows="4"
                        placeholder="Your Questions..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="block-button mt-40">
                    <button class="button-blue button-blue-hover" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="bg-white mt-[80px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4347557462015!2d72.88755739999999!3d21.214602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe9b98e62b1%3A0xdd967f123f266851!2sApple%20square!5e0!3m2!1sen!2sin!4v1701936109421!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-2xl" title="add"></iframe>
            </div>
            </div>
      </div>
    </>
  );
}
