import style from "../styles/choose.module.scss";
import { FaCode } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";
import { RiCheckDoubleFill } from "react-icons/ri";

interface cards {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: SVGAElement | any;
  title: string;
  description: string;
}

interface cardsMobile {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: SVGAElement | any;
  description: string;
}

const cardsArr: cards[] = [
  {
    icon: FaCode,
    title: "Place holder",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
  {
    icon: FiHexagon,
    title: "Maintained 24/7",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
  {
    icon: FiHexagon,
    title: "Maintained 24/7",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
  {
    icon: FaCode,
    title: "Place holder",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
  {
    icon: FaCode,
    title: "Place holder",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
  {
    icon: FiHexagon,
    title: "Maintained 24/7",
    description:
      "Lorem ips Rdggdum dolor sit am ec   onsectetur adipisc ing elit. In ",
  },
];

const cardsMobileArr: cardsMobile[] = [
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
  {
    icon: RiCheckDoubleFill,
    description: "Our bots never seeep.Profid 24/7.Emotion-free",
  },
];

const Choose = () => {
  return (
    <>
      <section className={style.choose}>
        <div className={style.chooseMain}>
          <h2>Why choose us</h2>
          <h3>Our bots never seeep.Profid 24/7.Emotion-free</h3>
          <div className={style.cards}>
            {cardsArr.map((card, i) => {
              return (
                <div key={i} className={style.card}>
                  <card.icon className={style.icon} />
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={style.mobile}>
        <h2>Why Choose us</h2>
        <div className={style.responsive}>
          {cardsMobileArr.map((card, i) => {
            return (
              <div className={style.response} key={i}>
                <div className={style.tick}>
                  <card.icon />
                </div>
                <div className={style.responsecontent}>{card.description}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Choose;
