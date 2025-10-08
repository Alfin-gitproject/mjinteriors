import Image from "next/image";

export default function GypsumWork() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/gypsum.jpg"
                alt="Gypsum Work"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Gypsum Work</h2>
              <p className="service-description mb-24">
                Creating elegant gypsum ceilings and wall designs that elevate interiors with seamless craftsmanship and bespoke detailing. Our skilled artisans transform your spaces with intricate gypsum work that enhances both aesthetic appeal and architectural character.
              </p>
              <p className="service-description mb-24">
                Our process starts with a detailed consultation to understand your design preferences and the unique features of your space. We provide custom sketches and 3D renderings to visualize intricate ceiling and wall designs, ensuring every detail aligns with your vision before craftsmanship begins.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Gypsum Work Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Custom gypsum designs tailored to your home’s aesthetic.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Precision craftsmanship for seamless and elegant finishes.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>High-quality gypsum materials for durability and beauty.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Integration with lighting and decor for enhanced ambiance.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                We specialize in creating bespoke gypsum features, from ornate ceiling patterns to sleek wall panels, designed to complement your home’s style. Whether you seek a modern minimalist look or intricate traditional designs, our team delivers tailored solutions that elevate your interiors.
              </p>
              <p className="service-description">
                Our artisans work closely with designers and contractors to ensure flawless installation, using premium gypsum materials for lasting durability. With a focus on precision and artistry, we create gypsum work that transforms your home into a sophisticated and inviting space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}