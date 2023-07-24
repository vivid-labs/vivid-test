import styles from "./PaintBrush.module.css";
import paintBrush from "./paintBrush.svg";
export const PaintBrush = ({ override }: { override?: any }) => {
  return (
    <img
      src={paintBrush.src}
      style={override}
      className={styles.paintBrush}
      figma-id="7:1503:3605"
    />
  );
};
