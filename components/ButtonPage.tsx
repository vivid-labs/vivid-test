import styles from "./ButtonPage.module.css";

export const ButtonPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.buttonPage}>
      <p className={styles.button}>Button</p>
    </div>
  );
};
