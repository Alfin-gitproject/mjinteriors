export default function FaqArea() {
  return (
    <div className="faq-section-02 section-padding-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="accordion-style" id="accordionExample">
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
                    What does your Interior Design service involve?
                  </button>
                  <div
                    id="faq-02-item"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Interior Design service provides bespoke solutions, including personalized consultations, mood boards, 3D renderings, and curated material selections. We create spaces that blend style, comfort, and functionality, tailored to your unique vision and lifestyle.
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
                    How do you ensure quality in Architectural Planning?
                  </button>
                  <div
                    id="faq-02-item-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Architectural Planning service delivers detailed 2D blueprints and 3D models tailored to your needs, using innovative designs and sustainable materials. We collaborate closely with you to ensure functionality, elegance, and compliance with local regulations.
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
                    Are your Electrical Work services safe and reliable?
                  </button>
                  <div
                    id="faq-02-item-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Yes, our certified electricians adhere to strict safety standards and local codes, offering custom layouts and energy-efficient solutions. We integrate electrical systems seamlessly with your home’s design for safety and aesthetic appeal.
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
                    What kind of designs can I expect from Gypsum Work?
                  </button>
                  <div
                    id="faq-02-item-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Gypsum Work service offers custom ceiling and wall designs, from modern minimalist panels to intricate traditional patterns. We use high-quality materials and provide 3D renderings to ensure seamless integration with your interiors.
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
                    Can you customize handrails to match my home’s style?
                  </button>
                  <div
                    id="faq-02-item-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Handrail Work service provides fully customized designs, from sleek stainless steel to elegant hardwood. We offer sketches and samples to ensure durable, stylish handrails that complement your home’s aesthetic and meet safety needs.
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
                    What is included in your Paint Work service?
                  </button>
                  <div
                    id="faq-02-item-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-02"
                  >
                    <div className="accordion-item__body">
                      Our Paint Work service includes color consultations, eco-friendly paint options, and meticulous surface preparation for flawless finishes. We provide digital mock-ups to ensure vibrant, durable results that enhance your home’s aesthetic.
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