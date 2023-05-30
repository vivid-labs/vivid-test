import styles from "./OverlayPage.module.css";

export const OverlayPage = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.overlayPage0}>
      <div className={styles.overlayPage1} />
      <div className={styles.overlayPage2} />
      <div className={styles.overlayPage3} />
      <div className={styles.overlayPage4} />
    </div>
  );
};
