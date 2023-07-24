import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle} figma-id="3:33:1183">
      <div className={styles.ellipse_7} figma-id="3:33:1177" />
      <div className={styles.ellipse_9} figma-id="3:33:1179" />
      <div className={styles.ellipse_8} figma-id="3:33:1178" />
      <div className={styles.ellipse_10} figma-id="3:33:1180" />
      <div className={styles.ellipse_11} figma-id="3:33:1181" />
      <div className={styles.ellipse_12} figma-id="3:33:1182" />
    </div>
  );
};
