import styles from "../styles/wrapper.module.scss";

type childrenProps = string | JSX.Element | JSX.Element[] | null;


interface WrapperSectionProps {
  children: childrenProps;
  color?: string;
}

const WrapperSection = ({ children, color = "white" }: WrapperSectionProps) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className={styles.sectionWrapper}
    >
      {children}
    </section>
  );
};

export default WrapperSection;
