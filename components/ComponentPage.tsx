import styles from "./ComponentPage.module.css";

export const ComponentPage = ({ style }: { style?: any }) => {
  return (
    <p style={style} className={styles.componentPage}>
      34.53 ETH
    </p>
  );
};
