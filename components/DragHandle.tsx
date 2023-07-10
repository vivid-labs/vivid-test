import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.outerEllipse} />
    <div className={styles.innerEllipse} />
    <div className={styles.middleEllipse} />
    <div className={styles.smallEllipse} />
    <div className={styles.upperEllipse} />
    <div className={styles.lowerEllipse} />
   </div> 
  );
};
