import styles from "./Page.module.css";

export const Page = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.page0}>
      <p className={styles.page1}>&lt; ? &quot; &#39; &gt; ` ^ *</p>
    </div>
  );
};
