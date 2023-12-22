import { useState } from "react";
import { PiChartLineUp, PiFingerprint, PiMedal, PiMoneyDuotone } from "react-icons/pi";

export function Benefit () {
    const [benefits] = useState([
        { icon: <PiMedal />, label: "Expertise", text:"Access to specialized knowledge and technology expertise. " },
        { icon: <PiMoneyDuotone />, label: "Cost Savings", text:"Capital isn’t this pile of money sitting somewhere; it’s an accounting construct." },
        { icon: <PiFingerprint />, label: "Enhanced Security", text:"Accounting rules give financial institutions flexibility about when they choose to recognize venture capital profits." },
        { icon: <PiChartLineUp />, label: "Increased Efficiency", text:"we take a proactive, “no surprises” approach that will help you fully capitalize on the tax benefits of owning a business." },
      ]);
    return(
        <>
            <div className="section-benefit mt-80 mb-[80px]">
        <div className="container"> 
          <div className="row row-gap-40">
          {
            benefits.map((benefit)=>{
                return(
                    <>
                    <div className="col-12 col-lg-3 col-sm-6">
                        <div className="benefit-item ">
                            <div className="block-icon"> <i className="fs-42">{benefit.icon}</i></div>
                            <div className="heading6 mt-8">{benefit.label}</div>
                            <div className="text-on-surface-variant1 mt-8">{benefit.text}</div>
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