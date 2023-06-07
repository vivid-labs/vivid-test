import styles from "./Home.module.css";
import home from "./home.svg";

export const Home = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.home}>
      <div>
        <img src={home.src} className={styles.homeImage} />
      </div>
    </div>
  );
};
