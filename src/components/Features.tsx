import style from "../styles/features.module.scss";
import { Link } from "react-router-dom";
import trading from "../assets/trading.svg";
import { IoMdSettings } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";
import { RxCheckCircled } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import WrapperSection from "./Wrapper";
import { bgColors } from "../colors";

interface FeatureInterFace {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const Features = () => {
  const featu: FeatureInterFace[] = [
    { title: "Place holder", icon: IoMdSettings },
    { title: "Place holder", icon: FaCode },
    { title: "Place holder", icon: FiHexagon },
    { title: "Place holder", icon: FiHexagon },
    { title: "Place holder", icon: FiHexagon },
  ];
  return (
    <WrapperSection color={bgColors.color5}>
      <section className={style.features}>
        <h1>Features</h1>
        <p>
          Ye am depending propriety sweetness distrusts Ye am depending
          propriety sweetness distrusts belonging collected.{" "}
        </p>
        <div className={style.featureCards}>
          {featu.map((item, index) => (
            <div className={style.item} key={index}>
              <item.icon className={style.icon} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className={style.trading}>
          <div className={style.left}>
            <img src={trading} alt="trading" />
          </div>
          <div className={style.right}>
            <h3>Place Holder</h3>
            <h4>
              <RxCheckCircled className={style.icon} />
              Manual Trading
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              nihil velit a quaerat minima, fugiat ipsam necessitatibus! Ad,
              error aspernatur, accusantium pariatur excepturi animi harum odit
              porro dignissimos, iste fugiat?
            </p>
            <Link to="/">
              Learn More <FaArrowRightLong className={style.icon} />
            </Link>
          </div>
        </div>
        {/* <Waves /> */}
      </section>
    </WrapperSection>
  );
};

export default Features;
{
  /* <div className={style.feature}>
<section className={style.features}>
  <h1>Features</h1>
  <p>
    Ye am depending propriety sweetness distrusts Ye am depending
    propriety sweetness distrusts belonging collected.{" "}
  </p>
  <div className={style.featureCards}>
    {featu.map((item, index) => (
      <div className={style.item} key={index}>
        <item.icon className={style.icon} />
        <span>{item.title}</span>
      </div>
    ))}
  </div>
  <div className={style.trading}>
    <div className={style.left}>
      <img src={trading} alt="trading" />
    </div>
    <div className={style.right}>
      <h3>Place Holder</h3>
      <h4>
        <RxCheckCircled className={style.icon} />
        Manual Trading
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        nihil velit a quaerat minima, fugiat ipsam necessitatibus! Ad,
        error aspernatur, accusantium pariatur excepturi animi harum
        odit porro dignissimos, iste fugiat?
      </p>
      <Link to="/">
        Learn More <FaArrowRightLong className={style.icon} />
      </Link>
    </div>
  </div>
  <Waves />
</section>
</div> */
}
