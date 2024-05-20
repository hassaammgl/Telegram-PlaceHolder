import { RxCheckCircled } from "react-icons/rx";
import style from "../styles/pricing.module.scss";

interface Feature {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface PricingItem {
  category: string;
  price: string;
  features: Feature[];
}

const Pricing = () => {
  const pricings: PricingItem[] = [
    {
      category: "Beginner",
      price: "10.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
    {
      category: "Premium",
      price: "20.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
    {
      category: "Business",
      price: "30.00",
      features: [
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
        { title: "Manual Trading", icon: RxCheckCircled },
      ],
    },
  ];

  return (
    <section className={style.pricing}>
      <h2>Transparent Pricing</h2>
      <h5>No hidden fees. no commission fees. no suprises</h5>
      <div className={style.plans}>
        {pricings.map((plans, i) => (
          <div className={style.card} key={i}>
            <h3>{plans.category}</h3>
            <div className={style.prices}>
              <span className={style.currency}>$</span>
              {plans.price} <span className={style.duration}>/month</span>
            </div>
            <button className={style.btn}>Buy Now</button>
            <div className={style.features}>
              {plans.features.map((features, i) => (
                <span className={style.feat} key={i}>
                  <features.icon className={style.icon} />
                  {features.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    // <WrapperSection></WrapperSection>
  );
};

export default Pricing;
