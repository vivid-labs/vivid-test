import styles from "./Button.module.css";

export const Button = ({ style, color }: { style?: any; color: string }) => {
  const startToExploreColor =
    color === "White"
      ? {
          color: "rgb(13, 17, 20)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonColor =
    color === "White"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(32, 35, 38)",
        };

  return (
    <div
      style={{
        ...buttonColor,
        ...style,
      }}
      className={styles.button}
    >
      <p style={startToExploreColor} className={styles.startToExplore}>
        Start to explore
      </p>
    </div>
  );
};
