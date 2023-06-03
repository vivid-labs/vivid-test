import styles from "./LargeChildrenTrialPage.module.css";

export const LargeChildrenTrialPage = ({ style }: { style?: any }) => {
  return (
    <div style={style} className={styles.largeChildrenTrialPage}>
      <div className={styles.child} />
    </div>
  );
};
