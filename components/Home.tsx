import styles from "./Home.module.css";
import home from "./home.svg";
export const Home = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.homeWrapper} style={override}>
    <div>
      <img className={styles.homeImage} src={home.src} />
    </div>
   </div> 
  );
};
