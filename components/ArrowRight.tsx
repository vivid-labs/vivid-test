import styles from "./ArrowRight.module.css";
import arrowRight from "./arrowRight.svg";
export const ArrowRight = ({ override }: { override?: any }) => {
  return (<img src={arrowRight.src} style={override} className={styles.arrowIconImage} />);
};
