import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ data }) {
    return (
        <div className="service-card h-100">
            <div className="service-card__icon">
                <Image
                    height={100}
                    width={100}
                    src={data.icon}
                    alt="service icon"
                />
            </div>
            <div className="service-card__body">
                <h3 className="service-card__title">{data.title}</h3>
                <p>
                    {data.paragraph}
                </p>
            </div>
            <div className="service-card__footer">
                <Link
                    href={data.url || "/service-details"} 
                    className="btn btn-primary btn-small w-100 space-between hvr-fill-black"
                >
                    view details
                    <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                </Link>
            </div>
        </div>
    );
}
