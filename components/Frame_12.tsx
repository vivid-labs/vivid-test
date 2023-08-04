import styles from "./Frame_12.module.css";
export const Frame_12 = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.helpMessage} style={override}>
    <div className={styles.frame_12} />
    <div className={styles.rectangle_1} />
    <div className={styles.rectangle_2} />
    <p className={styles.rectangle_3}>HELP MEEEE</p>
   </div> 
  );
};
