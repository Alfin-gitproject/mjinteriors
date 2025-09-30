import Image from "next/image";

export default function ContactInfo() {
    return (
        <div className="contact-text-block__wrapper">
            <div className="contact-text-block">
                <div className="contact-content__heading ">
                    <span className="subtitle">GET IN TOUCH</span>
                    <h2 className="content-title heading-md">
                        Contact our support team to grow your business
                    </h2>
                </div>
            </div>
            <div className="contact-widgets-02">
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/location.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">
                        Chunagamvally
                        Aluva kochi, kerala,  683112
                    </span>
                </div>
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/phone.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">7560902486</span>
                </div>
                <div className="contact-widget-02">
                    <div className="contact-widget-02__icon">
                        <Image
                            height={22}
                            width={22}
                            src="/image/common/mail.svg"
                            alt="icon"
                        />
                    </div>
                    <span className="contact-widget-02__text">
                        mjinteriorsm@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
}
