

export function About() {

  return (
    <div className="section-about mt-60">
      <div className="container">
        <div className="content">
          <div className="row row-gap-12 ">
            <div className="col-12 col-xl-5 col-md-6">
              <div className="text-label text-white bg-blue">About Us</div>
              <div className="heading3 text-white mt-16">Getting started with Us is easy.</div>
            </div>
            <div className="col-12 col-md-6">
              <div className="desc text-white">Our accounting and bookkeeping outsourcing services are designed to be both professional and personalized to meet the unique needs of your practice. Our accounting experts are highly qualified and function as a seamless extension of your in-house team. </div>
              <a className="text-button-small text-white border-underline-white-2px mt-16" href="/about-us">Join us today!</a>
            </div>
          </div>
          {/* <div className="line"></div>
          <div className="counter row row-gap-24 pt-40">
          {counters.map((counter, index) => (
            <div className="col-6 col-md-3">
              <div key={index} className="counter-item">
                <div className="count-number heading3 text-white">
                  {counter.started ? (
                    <CountUp start={0} end={counter.value} duration={6} />
                  ) : (
                    0
                  )}
                </div>
                <div className="body1 mt-4 text-white">{counter.label}</div>
              </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}