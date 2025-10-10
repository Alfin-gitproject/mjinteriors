import Image from "next/image";

export default function ArchitecturalPlan() {
  return (
    <div className="service-section section-padding">
      <div className="container">
        <div className="row gutter-y-default justify-content-center justify-content-lg-between">
          <div className="col-lg-5 col-md-7 col-sm-8 col-xs-9">
            <div className="service-content__image">
              <Image
                height={1068}
                width={800}
                src="/image/service/archieture.webp"
                alt="Architectural Plan"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="service-content__heading text-center text-lg-start">
              <span className="subtitle">OUR SERVICES</span>
              <h2 className="content-title heading-md mb-32">Architectural Plan</h2>
              <p className="service-description mb-24">
                Designing innovative architectural plans that blend functionality and elegance for personalized private residences. Our experienced architects work closely with you to create blueprints that reflect your vision, optimize space, and elevate the aesthetic appeal of your home.
              </p>
              <p className="service-description mb-24">
                Our architectural design process begins with a comprehensive consultation to understand your lifestyle, preferences, and site-specific requirements. We develop detailed plans, including 2D blueprints and 3D models, to provide a clear vision of your future home, ensuring every detail aligns with your goals.
              </p>
              <h3 className="heading-sm mb-24">Key Features of Our Architectural Plan Service</h3>
              <ul className="feature-list list-unstyled mb-24">
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Customized architectural plans tailored to your unique needs.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Innovative designs that balance aesthetics and practicality.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Integration of sustainable and energy-efficient solutions.</span>
                </li>
                <li className="mb-16">
                  <i className="fa-solid fa-check-circle me-8"></i>
                  <span>Precise blueprints and 3D visualizations for clear project execution.</span>
                </li>
              </ul>
              <p className="service-description mb-24">
                Our architectural plans are crafted to harmonize with your site’s unique characteristics, from topography to natural light. Whether you’re envisioning a modern masterpiece, a timeless traditional home, or a compact eco-friendly design, we customize every element to suit your vision and budget.
              </p>
              <p className="service-description">
                We collaborate with engineers, contractors, and other professionals to ensure your plans are both visionary and feasible. With a focus on precision and innovation, our architectural designs lay the foundation for a home that is beautiful, functional, and built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}