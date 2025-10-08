import Link from "next/link";

export default function ServicePriceCard({ data }) {
  return (
    <div className="pricing-card h-100">
      <div className="pricing-card__inner d-flex flex-column">
        <h3 className="pricing-card__title">{data.title}</h3>
        <p>{data.description}</p>
        <ul className="list-style-bullet flex-grow-1">
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="pricing-card__bottom">
          <span className="pricing-card__price">
            {data.priceUnit ? `₹${data.price} ${data.priceUnit}` : `₹${data.price}`}
          </span>
          <Link
            href="/contact"
            className="btn btn-primary w-100 space-between btn-small hvr-fill-black"
          >
            Contact us for pricing
            <i className="fa-solid fa-arrow-right icon-arrow-corner" />
          </Link>
        </div>
      </div>
    </div>
  );
}