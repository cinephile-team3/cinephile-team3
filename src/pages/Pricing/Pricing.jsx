import PricingCard from '../../components/PricingCard/PricingCard'
import '../Pricing/Pricing.scss'

const plansData = [
    {
        label: "ESSENTIALS",
        title: "BASIC",
        price: "$3.99",
        features: [
            "1080p HD Streaming",
            "1 Concurrent Screen",
            "Ad-Supported Library",
        ],
        buttonText: "Select Basic",
        isFeatured: false,
        isBestValue: false,
    },
    {
        label: "MOST POPULAR",
        title: "SUPERIOR",
        price: "$7.99",
        features: [
            "4K Ultra HD + HDR",
            "2 Concurrent Screens",
            "No Commercial Breaks",
            "Spatial Audio Support",
        ],
        buttonText: "Select Superior",
        isFeatured: false,
        isBestValue: false,
    },
    {
        label: "ELITE CHOICE",
        title: "PREMIUM",
        price: "$10.99",
        features: [
            "8K Streaming Ready",
            "Unlimited Screens",
            "Early Access Premiers",
            "Dolby Atmos Mastering",
        ],
        buttonText: "Select Premium",
        isFeatured: true,
        isBestValue: true,
    },
]

function Pricing() {
  return (
    <div className='pricing'>
        <div className='pricing__header'>
            <h1 className='pricing__title'>CHOOSE YOUR EXPERIENCE</h1>
            <p className='pricing__subtitle'>Precision-engineered streaming for the ultimate cinematic immersion. Select the tier that matches your passion.
            </p>
        </div>

        <div className='pricing__container'>
            {plansData.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </div>
    </div>
  )
}

export default Pricing
