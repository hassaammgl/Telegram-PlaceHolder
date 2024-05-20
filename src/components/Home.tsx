import Loader from "./Loader";
import { Suspense, lazy } from "react";
import style from "../styles/home.module.scss";
import Phone from "../assets/herophone.svg";
const Features = lazy(() => import("../components/Features"));
const Faq = lazy(() => import("./Faq"));
const Automate = lazy(() => import("./Automate"));
const Choose = lazy(() => import("./Choose"));
const Pricing = lazy(() => import("./Pricing"));
const Trust = lazy(() => import("./Trust"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className={style.home}>
          <aside className={style.left}>
            <h1>Telegram Place holder here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum
              unde aperiam reiciendis, iusto illo, maxime pariatur cum ratione
              non error incidunt animi natus asperiores fuga laborum expedita
              magnam at!
            </p>
            <button>Start Now</button>
          </aside>
          <aside className={style.right}>
            <img src={Phone} alt="phone" />
          </aside>
        </section>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Automate />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Choose />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Trust />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Faq />
      </Suspense>
    </>
  );
};

export default Home;
