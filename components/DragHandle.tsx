import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.outerEllipse} />
    <div className={styles.innerEllipse} />
    <div className={styles.topLeftEllipse} />
    <div className={styles.topRightEllipse} />
    <div className={styles.bottomLeftEllipse} />
    <div className={styles.bottomRightEllipse} />
   </div> 
  );
};
