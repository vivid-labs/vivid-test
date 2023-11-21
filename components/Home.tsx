import styles from "./Home.module.css";
import home from "./home.svg";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.homeComponent} style={override}>
      <div className={styles.iconlyLightOutlineHome}>
        <img className={styles.homeImage} src={home.src} />
      </div>
    </div>
  );
};
