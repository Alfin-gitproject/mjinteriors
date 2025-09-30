import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero-section-01 bg-black">
            <div className="container">
                <div className="row row--hero-content">
                    <div className="col-xxl-auto ">
                        <div className="hero-content mb-140">
                            <h1 className="hero-content__title heading-xl text-sand">
                                Designing Interiors That Reflect Your Lifestyle
                            </h1>
                            <p>
                                At MJ Interiors, we believe interiors are more than just spaces – they are reflections of your lifestyle, personality, and vision.Our approach blends creativity with functionality, ensuring every detail is thoughtfully designed to bring comfort, elegance, and purpose to your home or workspace. From concept to completion, we craft interiors that not only look beautiful but also feel uniquely yours.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-auto">
                    <div className="hero-content__image">
                        <Image
                            height={640}
                            width={1504}
                            src="/image/home-1/home1.jpg"
                            alt="hero image"
                            className="w-100 h-auto"
                        />
                        <div className="hero-content__navigation-circle-wrapper">
                            <div className="hero-content__navigation-circle">
                                <Image
                                    height={258}
                                    width={258}
                                    src="/image/home-1/navigation-image.png"
                                    alt="icon"
                                    className="w-100 h-auto"
                                />
                                <Link
                                    href="/contact"
                                    className="hero-content__navigation-circle-text d-block"
                                >
                                    <Image
                                        height={258}
                                        width={258}
                                        src="/image/home-1/text-circle.png"
                                        alt="text circle"
                                        className="w-100 h-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
