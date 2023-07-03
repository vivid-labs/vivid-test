import styles from "./Home.module.css";
import home from "./home.svg";

export const Home = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.home}>
      <div>
        <img src={home.src} className={styles.homeImage} />
      </div>
    </div>
  );
};
