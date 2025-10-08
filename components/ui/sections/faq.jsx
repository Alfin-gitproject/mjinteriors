import Link from "next/link";

export default function Faq() {
  return (
    <div className="faq-section section-padding-100">
      <div className="container">
        <div className="row row--custom gutter-y-40">
          <div className="col-xxl-4 col-lg-5 col-md-9">
            <div className="faq-content">
              <div className="faq-content__text-block">
                <span className="subtitle">Have any question?</span>
                <h1 className="faq-content__title heading-md text-black mb-res-60">
                  The most common questions from our clients
                </h1>
              </div>
              <div className="faq-content__button">
                <Link
                  href="/contact"
                  className="btn btn-primary hvr-fill-black"
                >
                  Contact Us for Inquiries
                  <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 offset-lg-1 col-lg-6">
            <div className="accordion-style">
              {/* faq collapse start */}
              <div className="accordion-style" id="faq-02">
                <div className="accordion-item">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item"
                    aria-expanded="true"
                    aria-controls="faq-02-item"
                  >
                    What does your Interior Design service include?
                  </button>
                  <div
                    id="faq-02-item"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Interior Design service offers bespoke solutions tailored to your vision, including personalized consultations, detailed mood boards, 3D renderings, and floor plans. We focus on blending style, comfort, and functionality, sourcing high-quality furniture and materials to create spaces that reflect your personality and enhance your lifestyle.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item-2"
                    aria-expanded="false"
                    aria-controls="faq-02-item-2"
                  >
                    How do you approach Architectural Planning for a residence?
                  </button>
                  <div
                    id="faq-02-item-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Architectural Planning service begins with a comprehensive consultation to understand your needs and site conditions. We create detailed 2D blueprints and 3D models, integrating innovative designs with sustainable solutions to ensure your home is both functional and elegant, tailored to your vision and budget.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item-3"
                    aria-expanded="false"
                    aria-controls="faq-02-item-3"
                  >
                    Is your Electrical Work service safe and up to code?
                  </button>
                  <div
                    id="faq-02-item-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Absolutely. Our certified electricians ensure all installations meet stringent safety standards and local codes. We provide custom electrical layouts, smart home integration, and energy-efficient solutions, coordinating with your interior design to deliver safe, reliable, and aesthetically pleasing results.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item-4"
                    aria-expanded="false"
                    aria-controls="faq-02-item-4"
                  >
                    What types of Gypsum Work designs do you offer?
                  </button>
                  <div
                    id="faq-02-item-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Gypsum Work service includes custom ceiling and wall designs, ranging from modern minimalist panels to intricate traditional patterns. We use high-quality gypsum materials and offer 3D renderings to visualize designs, ensuring seamless integration with your home’s aesthetic and lighting.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item-5"
                    aria-expanded="false"
                    aria-controls="faq-02-item-5"
                  >
                    Can you customize handrails for specific styles?
                  </button>
                  <div
                    id="faq-02-item-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Yes, our Handrail Work service offers fully customized designs, from sleek stainless steel to warm hardwood finishes. We assess your safety and style needs, providing sketches and samples to create durable, stylish handrails that complement your home’s interior or exterior design.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-02-item-6"
                    aria-expanded="false"
                    aria-controls="faq-02-item-6"
                  >
                    What should I expect from your Paint Work service?
                  </button>
                  <div
                    id="faq-02-item-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Paint Work service includes personalized color consultations, eco-friendly paint options, and precision application for flawless finishes. We provide digital mock-ups and handle meticulous surface preparation, ensuring vibrant, durable results that enhance your home’s aesthetic.
                    </div>
                  </div>
                </div>
              </div>
              {/* faq collapse end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}