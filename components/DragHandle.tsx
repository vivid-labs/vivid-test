import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.ellipseOuter_1} />
    <div className={styles.ellipseOuter_2} />
    <div className={styles.ellipseOuter_3} />
    <div className={styles.ellipseInner_1} />
    <div className={styles.ellipseInner_2} />
    <div className={styles.ellipseInner_3} />
   </div> 
  );
};
