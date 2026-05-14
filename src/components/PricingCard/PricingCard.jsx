import '../PricingCard/PricingCard.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="#fface8"/>
    <path d="M10 5.5l1.18 3.63H14.9l-3.07 2.23 1.18 3.63L10 12.77l-3.01 2.22 1.18-3.63L5.1 9.13h3.72L10 5.5z" fill="#151826"/>
  </svg>
)

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

      <ul className={`pricing-card__features ${isFeatured ? 'pricing-card__features--premium' : ''}`}>
        {features.map((feature, index) => (
          <li key={index}>
            {isFeatured ? <StarIcon /> : <i className="bi bi-check-circle-fill"></i>}
            {feature}
          </li>
        ))}
      </ul>

      {isFeatured
      ? <PrimaryButton label={buttonText} />
      : <SecondaryButton label={buttonText} />
      }

    </div>
  );
}

export default PricingCard;