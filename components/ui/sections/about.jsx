import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="about-section padding-top-140">
            <div className="container">
                <div className="about-section__wrapper border-bottom padding-bottom-140">
                    <div className="row gutter-x-40 align-items-center row align-items-center justify-content-center gutter-y-40">
                        <div
                            className="col-xl-5  col-lg-5 col-md-6 col-xs-7 col-8"
                            data-aos-duration={1000}
                            data-aos="fade-right"
                        >
                            <div className="about-image-3">
                                <Image
                                    height={214}
                                    width={210}
                                    src="/image/home-2/about-image.png"
                                    alt="structure"
                                    className="w-100 h-auto"
                                />
                            </div>
                        </div>
                        <div
                            className="offset-xl-1  col-xxl-6 col-xl-6 col-lg-7 col-md-8 col-auto"
                            data-aos-duration={1000}
                            data-aos="fade-left"
                        >
                            <div className="content-text-block-wrapper">
                                <div className="content-text-block">
                                    <span className="subtitle">
                                        about company
                                    </span>
                                    <h2 className="content-title heading-md mb-32">
                                     Crafting Personalized Interiors with Style and Functionality
                                    </h2>
                                    <p>
                                       our Interior Design service transforms private residences into bespoke spaces that reflect your unique vision. We blend style, comfort, and functionality through personalized consultations, detailed mood boards, and 3D renderings, ensuring every design elevates your lifestyle with elegance and practicality
                                    </p>
                                </div>
                                <div className="content-button-block">
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary hvr-fill-black"
                                    >
                                        Contact us
                                        <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
