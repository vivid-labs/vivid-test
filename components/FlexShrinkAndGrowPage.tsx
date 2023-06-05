import styles from "./FlexShrinkAndGrowPage.module.css";

export const FlexShrinkAndGrowPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.flexShrinkAndGrowPage}>
      <div className={styles.leftFrame}>
        <div className={styles.rightFrame} />
      </div>
      <div className={styles.rightFrameDiv} />
    </div>
  );
};
