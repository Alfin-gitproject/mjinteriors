import Image from "next/image";

export default function InteriorDesign() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/service2.png"
                alt="Interior Design"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Interior Design</h2>
              <p className="service-description mb-24">
                Transforming private residences with bespoke designs that blend style, comfort, and functionality, tailored to your unique vision. Our expert designers collaborate closely with you to craft spaces that reflect your personality, enhance your lifestyle, and maximize the potential of your home.
              </p>
              <p className="service-description mb-24">
                Our design process begins with an in-depth consultation to understand your needs, preferences, and the unique characteristics of your space. We create detailed mood boards, 3D renderings, and floor plans to visualize your dream interior, ensuring every element aligns with your goals before implementation begins.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Interior Design Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Customized designs that reflect your unique style and personality.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Expert space planning to optimize functionality and flow.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Premium materials and finishes for durability and elegance.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Integration of sustainable and energy-efficient design solutions.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                Customization is central to our approach. Whether you envision a sleek, modern aesthetic, a warm and cozy ambiance, or a bold, eclectic mix of colors and textures, we tailor every detail to your preferences. We source high-quality furniture, fabrics, and accessories, ensuring a cohesive look that elevates your home’s appeal.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}