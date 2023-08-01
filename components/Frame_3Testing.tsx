import styles from "./Frame_3Testing.module.css";
export const Frame_3Testing = ({ override }: { override?: any }) => {
  return (
    <div className={styles.frame_3Testing} style={override}>
      <div className={styles.frame_4}>
        <p className={styles.tree}>Tree</p>
      </div>
      <p className={styles.newText}>new text</p>
      <p className={styles.otherText}>Other text</p>
    </div>
  );
};
