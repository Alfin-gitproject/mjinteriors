import ServiceCard from "@/components/ui/cards/service-card";
import { service3 } from "@/data/site";
import "../service/service.css"

export default function Service() {
    return (
        <div className="blog-section section-padding bg-sand">
            <div className="container">
                <div className="services-grid">
                    {service3?.map((item, i) => (
                        <div key={i} className="service-card-wrapper">
                            <ServiceCard data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}