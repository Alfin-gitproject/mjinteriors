import Image from "next/image";

export default function CupboardWork() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/cupboard.jpg"
                alt="Cupboard Work"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Cupboard Work</h2>
              <p className="service-description mb-24">
                Designing and crafting custom cupboards that maximize space and enhance aesthetics, tailored to your home’s unique style and storage needs. Our skilled craftsmen work closely with you to create storage solutions that blend seamlessly with your interior, offering both practicality and elegance.
              </p>
              <p className="service-description mb-24">
                Our process starts with a thorough assessment of your storage requirements and the available space in your home. We provide detailed designs, including 3D renderings and material samples, to ensure the cupboards meet your functional needs while complementing your home’s aesthetic.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Cupboard Work Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Custom-built cupboards tailored to your storage needs.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Space-saving designs to maximize room efficiency.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>High-quality materials for durability and visual appeal.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Seamless integration with your home’s existing style.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                Every cupboard we craft is designed with precision and attention to detail. Whether you need sleek, modern cabinets for a minimalist kitchen, ornate wardrobes for a classic bedroom, or multifunctional storage for a compact space, we customize every aspect to match your vision and lifestyle.
              </p>
              <p className="service-description">
                Our team handles the entire process, from design to installation, working with trusted suppliers to source premium materials. With a focus on quality craftsmanship, we ensure your cupboards are not only functional but also elevate the overall look of your home, providing lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}