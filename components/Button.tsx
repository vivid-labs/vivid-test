import styles from "./Button.module.css";

export const Button = ({ size, hover }: { size: string; hover: string }) => {
  const size_0 =
    size === "Small"
      ? {
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }
      : {
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "10px",
          paddingBottom: "10px",
        };
  const hover_0 =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  if (size === "Large" && hover === "False") {
    return;
  }

  return (
    <div
      style={{
        ...size_0,
        ...hover_0,
      }}
      className={styles.button0}
    >
      <p className={styles.button1}>Button</p>
    </div>
  );
};
