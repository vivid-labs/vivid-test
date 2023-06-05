import styles from "./LtQGtPage.module.css";

export const LtQGtPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.ltQGtPage}>
      <p className={styles.ltQGt}>&lt; ? &quot; &#39; &gt; ` ^ *</p>
    </div>
  );
};
