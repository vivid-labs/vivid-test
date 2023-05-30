import styles from "./TextContent.module.css";

export const TextContent = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.textContent0}>
      <div className={styles.textContent1} />
      <p className={styles.textContent2}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <p className={styles.textContent3}>Показать полностью...</p>
    </div>
  );
};
