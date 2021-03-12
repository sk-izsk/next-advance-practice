import styles from "./Home.module.scss";
interface Props {}

const Home: React.FC<Props> = () => {
  return <h1 className={styles.h1}>Hello world</h1>;
};

export default Home;
