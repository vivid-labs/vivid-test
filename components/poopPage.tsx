import styles from "./poopPage.module.css";

export const poopPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.poopPage}>
      <div className={styles.div} />
      <div className={styles.div1} />
    </div>
  );
};
