import styles from "./Button.module.css";

export const Button = ({
  style,
  size,
  hover,
}: {
  style?: any;
  size: string;
  hover: string;
}) => {
  const buttonSize =
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
  const buttonDivHover =
    hover === "True"
      ? {
          opacity: "0.5",
        }
      : {};
  if (size === "Large" && hover === "False") {
    return null;
  }

  return (
    <div
      style={{
        ...buttonSize,
        ...buttonDivHover,
        ...style,
      }}
      className={styles.button}
    >
      <p className={styles.buttonText}>Button</p>
    </div>
  );
};
