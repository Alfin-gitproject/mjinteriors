import Image from "next/image";

export default function ServiceDetail() {
  return (
    <div className="service-details_main-section section-padding-140 single-page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="service-details_main-image">
              <Image
                height={606}
                width={1116}
                src="/image/service/all-services.png"
                alt="Our Services"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <h3>About Our Services</h3>
            <p>
              At Konstruktion, we offer a comprehensive suite of services to transform your private residence into a masterpiece of design and functionality. Our expertise spans Interior Design, Cupboard Work, Gypsum Work, Electrical Work, Handrail Work, Architectural Planning, and Paint Work, each tailored to your unique vision and lifestyle. Our skilled professionals collaborate closely with you to deliver bespoke solutions that blend aesthetics, practicality, and innovation.
            </p>
            <p>
              From crafting elegant interiors and custom cupboards to designing innovative architectural plans and installing safe electrical systems, we ensure every project reflects your personal style while meeting the highest standards of quality. Our commitment to precision, sustainable materials, and seamless integration elevates your home, creating spaces that inspire and endure.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="row service-details_main-image-row">
              <div className="col-6">
                <Image
                  height={170}
                  width={170}
                  src="/image/service/interior-design.png"
                  alt="Interior Design"
                  className="w-100 h-auto"
                />
              </div>
              <div className="col-6">
                <Image
                  height={170}
                  width={170}
                  src="/image/service/gypsum-work.png"
                  alt="Gypsum Work"
                  className="w-100 h-auto"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <span>
              Our services are designed to enhance every aspect of your home, from structural planning to aesthetic detailing. We work with trusted suppliers and contractors to ensure flawless execution, delivering results that exceed expectations.
            </span>
            <h3>What&apos;s Included in Our Services?</h3>
            <p>
              Our holistic approach covers every stage of home transformation, from initial consultation to final installation. Whether you’re seeking custom storage solutions, vibrant paint finishes, or intricate gypsum designs, our team delivers tailored solutions that prioritize quality, safety, and style. Each service is crafted to integrate seamlessly with your home’s existing design, ensuring a cohesive and stunning result.
            </p>
            <ul className="list-style-bullet">
              <li>Personalized consultations to understand your vision and needs.</li>
              <li>Custom designs for interiors, cupboards, handrails, and architectural plans.</li>
              <li>High-quality materials and eco-friendly solutions for durability and sustainability.</li>
              <li>Professional installation and project management for a seamless experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}