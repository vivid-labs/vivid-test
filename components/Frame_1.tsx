import styles from "./Frame_1.module.css";
export const Frame_1 = ({ override }: { override?: any }) => {
  return (
    <div style={override} className={styles.container}>
    <div className={styles.innerContainer} />
   </div> 
  );
};
