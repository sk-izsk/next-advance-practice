import styles from "./styles.module.scss";

interface Props {}

const ScreenA: React.FC<Props> = () => {
  return <div className={styles.screenA}>hello, this is Screen A</div>;
};

export default ScreenA;
