import styles from "./Home.module.css";
import home from "./home.svg";

export const Home = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <div>
      <img src={home.src} className={styles.homeWrapper} />
    </div>
   </div> 
  );
};
