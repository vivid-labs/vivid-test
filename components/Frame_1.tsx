import styles from "./Frame_1.module.css";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.frameContainer}>
    <div className={styles.roundedFull} />
    <div className={styles.roundedExtraLarge} />
    <div className={styles.roundedDoubleExtraLarge} />
   </div> 
  );
};
