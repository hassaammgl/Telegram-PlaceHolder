import style from "../styles/automate.module.scss";
import design from "../assets/design.svg";
import { FaCode } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";

interface AutomateInterFace {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  desc: string;
}

const Automate = () => {
  const boxes: AutomateInterFace[] = [
    {
      title: "Create an advanced Place holder",
      icon: FaCode,
      desc: "Choose when to send transform,delay,clean, watermark, white list.",
    },
    {
      title: "Create an advanced Place holder",
      icon: FiHexagon,
      desc: "Lörem ipsum presk vajon kroling då behet. Okänera tunur heteronde. Ultravubel diskade. Peras.",
    },
  ];
  return (
    <section className={style.auto}>
      <h2>Automate your messages with poerfull bots</h2>
      <h4>Our bots never seeep.Profid 24/7.Emotion-free</h4>
      <div className={style.group}>
        <div className={style.left}>
          <div className={style.boxes}>
            {boxes.map((box, i) => (
              <div className={style.box} key={i}>
                <box.icon className={style.icon} />
                <h5>{box.title}</h5>
                <p>{box.desc}</p>
              </div>
            ))}
          </div>
          <button>Get it now</button>
        </div>
        <div className={style.right}>
          <img src={design} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Automate;
