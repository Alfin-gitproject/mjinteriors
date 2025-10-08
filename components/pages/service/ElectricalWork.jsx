import Image from "next/image";

export default function ElectricalWork() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/electrical.jpg"
                alt="Electrical Work"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Electrical Work</h2>
              <p className="service-description mb-24">
                Expert electrical installations and smart home wiring that ensure safety, efficiency, and seamless integration with modern interior designs. Our certified electricians deliver tailored solutions to power your home reliably while enhancing its functionality and aesthetic appeal.
              </p>
              <p className="service-description mb-24">
                Our process begins with a detailed assessment of your home’s electrical needs, considering both current requirements and future scalability. We provide comprehensive wiring plans and system designs, ensuring compliance with safety standards and compatibility with your interior design vision.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Electrical Work Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Custom electrical layouts designed for your home’s unique needs.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Smart home integration for automated lighting and energy control.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>High-safety standards with certified materials and installations.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Energy-efficient solutions to reduce long-term costs.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                We specialize in creating electrical systems that blend seamlessly with your home’s design. From recessed lighting and custom fixtures to advanced smart home automation, our solutions are tailored to enhance both functionality and style, ensuring a cohesive look that complements your interior.
              </p>
              <p className="service-description">
                Our team coordinates with designers and contractors to deliver a flawless installation process, minimizing disruptions to your home. With a commitment to precision and safety, we provide electrical work that powers your residence efficiently and supports your modern lifestyle for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}