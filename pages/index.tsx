import Link from "next/link";
import styles from "./Home.module.scss";
interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <h1 className={styles.h1}>
      Hello world
      <Link href="/zsk">go to this</Link>
    </h1>
  );
};

export default Home;
