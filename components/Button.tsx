import styles from "./Button.module.css";
export const Button = ({
  override,
  size,
  hover,
  text,
}: {
  override?: any;
  size: string;
  hover: string;
  text: string;
}) => {
  const buttonSize =
    size === "Small"
      ? {
          padding: "5px 10px",
        }
      : {
          padding: "10px 15px",
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
        ...override,
      }}
      className={styles.buttonComponent}
      figma-id="7:34:3574"
    >
      <p className={styles.button} figma-id="7:34:3575">
        {text}
      </p>
    </div>
  );
};
