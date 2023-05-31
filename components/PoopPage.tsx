import styles from "./PoopPage.module.css";

export const PoopPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.poopPage}>
      <div className={styles.div} />
      <div className={styles.div1} />
    </div>
  );
};
