const PricingCard = ({ label, title, price, features, buttonText, isFeatured, isBestValue }) => {
  return (
    <div className={`pricing-card ${isFeatured ? 'pricing-card--featured' : ''}`}>

      {isBestValue && <span className="pricing-card__badge">BEST VALUE</span>}

      <span className="pricing-card__label">{label}</span>

      <h2 className="pricing-card__title">{title}</h2>

      <p className="pricing-card__price">
        <span className="pricing-card__amount">{price}</span>
        <span className="pricing-card__period">/mo</span>
      </p>

      <ul className="pricing-card__features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="pricing-card__btn">{buttonText}</button>

    </div>
  );
}

export default PricingCard;