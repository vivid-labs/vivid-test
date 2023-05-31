import styles from "./Page.module.css";

export const Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.page}>
      <div className={styles.divDiv} />
      <div className={styles.divDiv1} />
    </div>
  );
};
