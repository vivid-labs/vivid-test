import styles from "./DragHandle.module.css";
export const DragHandle = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.dragHandle}>
    <div className={styles.circleSmall} />
    <div className={styles.circleLarge} />
    <div className={styles.circleMedium} />
    <div className={styles.circleExtraLarge} />
    <div className={styles.circleExtraSmall} />
    <div className={styles.circleGiant} />
   </div> 
  );
};
