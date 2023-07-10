import styles from "./Frame_1.module.css";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.frame_1}>
      <div className={styles.frame_2} />
    </div>
  );
};
