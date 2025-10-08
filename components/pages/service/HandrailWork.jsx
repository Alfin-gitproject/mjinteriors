import Image from "next/image";

export default function HandrailWork() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/handrail.jpg"
                alt="Handrail Work"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Handrail Work</h2>
              <p className="service-description mb-24">
                Crafting durable and stylish handrails that enhance safety and complement the aesthetic of your private residences. Our skilled artisans design and install handrails that provide reliable support while seamlessly blending with your home’s unique style.
              </p>
              <p className="service-description mb-24">
                Our process begins with a detailed consultation to assess your safety needs and design preferences. We create custom handrail designs, including material samples and 3D renderings, to ensure the final product meets both functional requirements and your aesthetic vision.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Handrail Work Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Custom-designed handrails tailored to your home’s style.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Durable materials for long-lasting safety and reliability.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Seamless integration with existing interior or exterior designs.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Precision installation for maximum stability and comfort.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                We offer a wide range of materials and finishes, from sleek stainless steel to warm hardwoods, allowing you to choose handrails that match your home’s character. Whether for staircases, balconies, or outdoor spaces, our designs prioritize both safety and visual appeal.
              </p>
              <p className="service-description">
                Our team manages every aspect of the project, from design to installation, working with trusted suppliers to source high-quality materials. With a focus on craftsmanship and attention to detail, we deliver handrails that enhance your home’s safety and elevate its overall aesthetic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}