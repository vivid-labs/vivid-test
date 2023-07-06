import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.outerEllipse} />
    <div className={styles.innerEllipse} />
    <div className={styles.smallEllipse} />
    <div className={styles.mediumEllipse} />
    <div className={styles.largeEllipse} />
    <div className={styles.extraLargeEllipse} />
   </div> 
  );
};
