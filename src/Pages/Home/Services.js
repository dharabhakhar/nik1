import { PiBank } from "react-icons/pi";
import { AiOutlineAudit } from "react-icons/ai";
import { TbReceiptTax } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";
import { MdMiscellaneousServices, MdOutlineManageAccounts } from "react-icons/md";
import { SiCrowdsource } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Services() {
    const ServicesTitle =[
        {name:'Finance & Banking', icon:<PiBank />},
        {name:'Audit and Assurance', icon:<AiOutlineAudit />},
        {name:'Tax Advisory and Compliances', icon:<TbReceiptTax />},
        {name:'Corporate and Secreterial Compliances', icon:<GrCompliance />},
        {name:'Corporate Advisory Services', icon:<MdMiscellaneousServices />},
        {name:'Business Process Outsourcing', icon:<SiCrowdsource />},
        {name:'Management Consultancy', icon:<MdOutlineManageAccounts />},
        {name:'Start up Advisory', icon:<RiCustomerService2Line />}
    ]
  return (
    <>
        <div className="section-service mt-80 mb-[80px]"> 
        <div className="container"> 
          <div className="row gy-2 flex-between">
            <div className="col-xl-8 col-md-9 col-12">
              <div className="text-label text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">What we do</div>
              <div className="heading3 mt-12">Solve Accounting problems in every industry that customers need.</div>
            </div>
          </div>
          <div className="row mt-40 row-gap-12 sub-nav-solution">
          {
            ServicesTitle.map((service)=>{
                return(
                    <>
                    <div className="col-sm-6 col-12"> <a className="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="/service-detail" data-cate="Finance Consulting" data-item=""><i className={`fs-24`}>{service.icon}</i>
                        <div className="service-name heading6 pl-12">{service.name}</div></a></div>
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