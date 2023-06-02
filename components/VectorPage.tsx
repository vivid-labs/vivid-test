import styles from "./VectorPage.module.css";
import vector from "./vector.svg";

export const VectorPage = ({ style }: { style?: any }) => {
  return <img src={vector.src} style={style} className={styles.vectorPage} />;
};
