import styles from "./Button.module.css";

export const Button = ({ size, hover }: { size: string; hover: string }) => {
  const size_0 = size === "Small" ? {} : {};
  const hover_0 = hover === "True" ? {} : {};

  return (
    <div className={styles.button0}>
      <p
        style={{
          ...size_0,
          ...hover_0,
        }}
        className={styles.button1}
      >
        Button
      </p>
    </div>
  );
};
