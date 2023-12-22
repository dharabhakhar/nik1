import { useRef } from "react";
import { PiCheck, PiEnvelope, PiMapPin, PiPhoneCall } from "react-icons/pi";
import emailjs from '@emailjs/browser';


export default function ContactUs() {
    const contact =[
        {title:'Confirmation of appointment details'},
        {title:'Consultation to discuss accounting solutions'},
        {title:'Needs assessment for tailored solutions'},
        {title:'Presentation of proposed solutions'},
        {title:'Project execution and ongoing support'},
        {title:'Follow-up to evaluate effectiveness and satisfaction'}
    ]
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
  return (
    <>
        <div className="section-contact bg-linear-grey pt-60 pb-60">
        <div className="container"> 
          <div className="row flex-between row-gap-40">
            <div className="col-12 col-xl-7 text-white">
              <div className="text-label text-white pt-4 pb-4 pl-12 pr-12 bg-blue bora-2 display-inline-block">Contact us</div>
              <div className="heading3 text-white mt-12">Free consultation - discover Accounting solutions for your business</div>
              <div className="list-features gy-2 mt-16">
              {
                contact.map((item,i)=>{
                    return(
                        <>
                        <div className="item flex-item-center"> <i className="fs-20"><PiCheck /></i>
                  <div className="body2 pl-12">{item.title}</div>
                </div>
                        </>
                    )
                })
              }
              </div>
              <div className="line mt-24"></div>
              <div className="flex-item-center mt-24"><i className="fs-20"><PiEnvelope /></i>
                <div className="body2 pl-12">canvbhakhar@gmail.com</div>
              </div>
              <div className="flex-item-center mt-8"><i className="fs-20"><PiPhoneCall /></i>
                <div className="body2 pl-12">90546 84292</div>
              </div>
              <div className="flex-item-center mt-8"><i className="fs-20"><PiMapPin /></i>
                <div className="body2 pl-12">109, Apple square, near Yogi chowk, Surat</div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <form className="form-block bora-16 bg-white pt-24 pb-24 pl-28 pr-28 d-flex flex-column gap-20" ref={form} onSubmit={sendEmail}>
                <div className="heading5">Schedule a free consultation</div>
                <div className="row gy-2">
                  <div className="col-12 col-sm-6"> 
                    <label className="caption1 text-on-surface-variant1 pb-8" for="firstName">First Name *</label>
                    <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="firstName" placeholder="" name="user_name" required/>
                  </div>
                  <div className="col-12 col-sm-6"> 
                    <label className="caption1 text-on-surface-variant1 pb-8" for="lastName">Last Name</label>
                    <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="lastName" placeholder=""/>
                  </div>
                  <div className="col-12">
                    <label className="caption1 text-on-surface-variant1 pb-8" for="phone">Subject *</label>
                    <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="phone" placeholder="" name="subject" required/>
                  </div>
                  <div className="col-12">
                    <label className="caption1 text-on-surface-variant1 pb-8" for="companyEmail">Email *</label>
                    <input className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="email" id="companyEmail" placeholder="" name="user_email" required/>
                  </div>
                  <div className="col-12"> 
                    <label className="caption1 text-on-surface-variant1 pb-8" for="message">Your message *</label>
                    <textarea className="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                  </div>
                </div>
                <div className="block-button">
                  <button className="button-blue button-blue-hover w-100" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
