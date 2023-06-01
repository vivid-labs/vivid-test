import styles from "./DragHandle.module.css";

export const DragHandle = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.dragHandle}>
      <div className={styles.ellipse_7} />
      <div className={styles.ellipse_9} />
      <div className={styles.ellipse_8} />
      <div className={styles.ellipse_10} />
      <div className={styles.ellipse_11} />
      <div className={styles.ellipse_12} />
    </div>
  );
};
