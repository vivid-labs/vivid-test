import styles from "./ButtonComponent.module.css";

export const ButtonComponent = ({
  style,
  size,
  hover,
}: {
  style?: any;
  size: string;
  hover: string;
}) => {
  const buttonComponentSize =
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
  const buttonComponentDivHover =
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
        ...buttonComponentSize,
        ...buttonComponentDivHover,
        ...style,
      }}
      className={styles.buttonComponent}
    >
      <p className={styles.button}>Button</p>
    </div>
  );
};
