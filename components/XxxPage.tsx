import styles from "./XxxPage.module.css";

export const XxxPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.xxxPage}>
      <p className={styles.xxx}>xxx</p>
    </div>
  );
};
