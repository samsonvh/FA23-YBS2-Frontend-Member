const AboutIntro = () => {
  return (
    <section className="section-bg layout-pt-lg layout-pb-lg">
      <div className="section-bg__item -right -w-1165 bg-light-2" />
      <div className="section-bg__item -video-left">
        <div className="row y-gap-30">
          <div className="col-sm-12">
            <video
              src="https://v3.cdnpk.net/videvo_files/video/free/video0460/large_preview/_import_60d1715da4a855.25127857.mp4"
              autoPlay
              muted
              loop
            />
          </div>
          {/* End .col */}

          {/* <div className="col-sm-6">
            <video src="https://placehold.co/1920x1080.mp4" />
          </div> */}
        </div>
        {/* End .row */}
      </div>
      {/* End .section-bg__item */}

      <div className="container lg:mt-30">
        <div className="row">
          <div className="offset-xl-6 col-xl-5 col-lg-6">
            <h2 className="text-30 fw-600">
              GoTrip is a World Leading Cruise Booking Platform
            </h2>
            <p className="text-dark-1 mt-40 lg:mt-20 sm:mt-15">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="d-inline-block mt-40 lg:mt-30 sm:mt-20">
              <a
                href="#"
                className="button -md -blue-1 bg-yellow-1 text-dark-1"
              >
                Learn More <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </section>
  );
};

export default AboutIntro;
