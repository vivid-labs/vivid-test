import styles from "./Button2Page.module.css";

export const Button2Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.button2Page}>
      <p className={styles.button}>Button</p>
    </div>
  );
};
