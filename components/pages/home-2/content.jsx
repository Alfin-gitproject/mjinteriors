import Image from "next/image";

export default function Content() {
  return (
    <div className="content-section-02 padding-top-140">
      <div className="container">
        <div className="row align-items-center flex-lg-row-reverse gutter-y-40 gutter-x-50 justify-content-center justify-content-lg-between">
          <div
            className="offset-xxl-1 col-lg-5 col-md-6 col-sm-7 col-8"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content-image-02">
              <Image
                height={477}
                width={436}
                src="/image/home-2/content-image.webp"
                alt="Our Services"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div
            className="col-xxl-6 col-lg-7 col-md-8 col-sm-11"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content-text-block-02-wrapper">
              <div className="content-text-block-02">
                <span className="subtitle">Trusted Expertise</span>
                <h2 className="content-title heading-md text-black mb-32">
                  Transforming Homes with Comprehensive Design and Craftsmanship
                </h2>
                <p>
                   we specialize in delivering bespoke Interior Design, Architectural Planning, Electrical Work, Gypsum Work, Cupboard Work, Handrail Work, and Paint Work. Our expert team collaborates closely with you to create personalized, high-quality solutions that elevate your home’s aesthetics, functionality, and safety.
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list">
                  <li className="content-list-item">Interior Design</li>
                  <li className="content-list-item">Architectural Plan</li>
                  <li className="content-list-item">Electrical Work</li>
                  <li className="content-list-item">Gypsum Work</li>
                </ul>
                <ul className="content-list">
                  <li className="content-list-item">Cupboard Work</li>
                  <li className="content-list-item">Handrail Work</li>
                  <li className="content-list-item">Paint Work</li>
                  <li className="content-list-item">Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}