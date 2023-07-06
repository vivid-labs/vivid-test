import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.ellipseOuter} />
    <div className={styles.ellipseInner} />
    <div className={styles.ellipseBottom} />
    <div className={styles.ellipseTop} />
    <div className={styles.ellipseLeft} />
    <div className={styles.ellipseRight} />
   </div> 
  );
};
