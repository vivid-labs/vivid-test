import styles from "./PregameComponent.module.css";
import pregameImage from "./pregameImage.png";

export const PregameComponent = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.pregameComponent}>
      <img src={pregameImage.src} className={styles.pregame} />
    </div>
  );
};
