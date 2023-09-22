import styles from "./Divider.module.css";
export const Divider = ({ override }: { override?: React.CSSProperties }) => {
  return (
    <div className={styles.dividerLine} style={override}>
    <div className={styles.dividerContainer} />
   </div> 
  );
};
