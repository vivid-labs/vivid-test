import styles from "./Page.module.css";

export const Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.page}>
      <div className={styles.div} />
      <div className={styles.div1} />
    </div>
  );
};
