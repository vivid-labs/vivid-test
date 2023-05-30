import styles from "./Page.module.css";

export const Page = ({ style }: { style: any }) => {
  return (
    <div style={style} className={styles.page}>
      <p>&lt; ? &quot; &#39; &gt; ` ^ *</p>
    </div>
  );
};
