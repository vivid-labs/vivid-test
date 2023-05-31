import styles from "./IVividPage.module.css";

export const IVividPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.iVividPage}>
      <div className={styles.frame_2} />
    </div>
  );
};
