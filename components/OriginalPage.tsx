import styles from "./OriginalPage.module.css";

export const OriginalPage = ({ style }: { style?: any }) => {
  return (
    <p style={style} className={styles.originalPage}>
      Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or
      later paired with iPhone 6s or later. New subscribers only. $9.99/month
      after trial. Plan automatically renews until cancelled. Terms apply.
    </p>
  );
};
