import styles from "./PaintBrush.module.css";
import paintBrush from "./paintBrush.svg";

export const PaintBrush = ({ style }: { style?: any }) => {
  return (
    <img src={paintBrush.src} style={style} className={styles.paintBrush} />
  );
};
