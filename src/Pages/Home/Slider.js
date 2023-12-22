export function Slider () {
    return(
        <>
             <div className="slider-block style-one mt-60">
        <div className="container"> 
          <div className="row row-gap-32">
            <div className="col-xl-5 col-12">
              <div className="text">
                <div className="pr-55 text-[42px] heading-2">We provide real world solutions to complex business issues through our services</div>
                <div className="body2 mt-16">You didn't start a business to track your cash flow, maintain or reconcile accounts. But we did. </div>
              </div>
              <div className="block-button mt-40 d-flex gap-16 flex-wrap"><a className="button hover-button bg-blue text-white border-none" href="/about-us"> <span>Explore More</span></a><a className="button hover-button bg-grey border-none" href="/contact-us"> <span>Contact</span></a></div>
            </div>
            <div className="col-xl-7 col-12">
              <div className="bg-img h-100"><img className="h-100" src={require('../../images/image 3.png')} alt=""/></div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}