import styles from "./Home.module.css";
import home from "./home.svg";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.homeContainer} style={override}>
    <div className={styles.homeIcon}>
      <img className={styles.homeImage} src={home.src} />
    </div>
   </div> 
  );
};
