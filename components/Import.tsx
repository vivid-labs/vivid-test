import styles from "./Import.module.css";
import import from "./import.svg";


export const Import = ({
  override
}: {
  override?: React.CSSProperties;
}) => {
  

  return <img className={styles.importComponent} src={import.src} style={override} />;
};