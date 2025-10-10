import Video from "@/components/ui/sections/video";
import Image from "next/image";
import Link from "next/link";

const images = [
   "/image/home-2/portfolio-1.webp",
    "/image/home-2/portfolio-2.webp",
    "/image/home-2/portfolio-3.webp",
    "/image/home-2/portfolio-4.webp",
];

export default function PortfolioDetail() {
  return (
    <div className="portfolio-details_main-section section-padding-140 single-page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="portfolio-details_main-image">
              <Image
                height={606}
                width={1116}
                src="/image/1-01.webp"
                alt="Residential Project Showcase"
                className="mb-res-60 w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="portfolio-details_main-single mb-res-80">
              <div className="portfolio-details_facts-block border-bottom">
                <div className="single-facts">
                  <h4 className="single-facts__title">Year</h4>
                  <span>August 2024</span>
                </div>
                <div className="single-facts">
                  <h4 className="single-facts__title">Client</h4>
                  <span>Private Homeowner</span>
                </div>
                <div className="single-facts">
                  <h4 className="single-facts__title">Services</h4>
                  <span>Interior Design, Architectural Plan, Electrical Work, Gypsum Work, Cupboard Work, Handrail Work, Paint Work</span>
                </div>
                <div className="single-facts">
                  <h4 className="single-facts__title">Location</h4>
                  <span>Ernakulam, Kerala, India</span>
                </div>
              </div>
              <h3>Crafting a Personalized Residential Masterpiece</h3>
              <p>
                At Konstruktion, we transformed a private residence in Ernakulam, Kerala, into a bespoke masterpiece by integrating our comprehensive services. Our Interior Design team created a harmonious blend of style and functionality with custom mood boards and 3D renderings, while our Architectural Planning ensured a structurally sound and elegant layout tailored to the client’s vision.
              </p>
              <p>
                The project featured intricate Gypsum Work for stunning ceiling designs, custom Cupboard Work for optimized storage, and stylish Handrail Work for safety and aesthetics. Our Electrical Work team implemented energy-efficient solutions, and our Paint Work service delivered vibrant, eco-friendly finishes, resulting in a cohesive and luxurious living space.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row portfolio-details_main-image-row mb-res-80 gutter-y-default">
              {images.map((item, i) => (
                <div key={i} className="col-6">
                  <Image
                    height={345}
                    width={546}
                    src={item}
                    alt={`Project Image ${i + 1}`}
                    className="w-100 h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="portfolio-details_main-single mb-res-80">
              <h3>The Final Design</h3>
              <p>
                The completed residence showcases a seamless integration of all seven services, creating a space that is both functional and visually stunning. From the elegant gypsum ceilings to the meticulously crafted handrails and vibrant paint finishes, every detail reflects our commitment to quality and personalization.
              </p>
              <p>
                Our collaborative approach ensured the project met the client’s unique needs, with custom storage solutions and energy-efficient electrical systems enhancing daily living. This project exemplifies how Konstruktion delivers comprehensive, high-quality solutions for private residences.
              </p>
            </div>
          </div>
          <div className="col-12">
            <Video />
          </div>
          <div className="col-lg-8">
            <p>
              This Ernakulam, Kerala, residence stands as a testament to Konstruktion’s expertise in delivering tailored solutions that elevate homes. By combining bespoke Interior Design, precise Architectural Planning, and skilled craftsmanship across all services, we created a space that blends luxury, comfort, and practicality. Contact us to bring your vision to life with our comprehensive design and construction services.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary mt-20 hvr-fill-black"
            >
              Get in Touch
              <i className="fa-solid fa-arrow-right icon-arrow-corner" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}