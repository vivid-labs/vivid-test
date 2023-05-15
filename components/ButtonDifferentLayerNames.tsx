import styles from "./ButtonDifferentLayerNames.module.css";

export const ButtonDifferentLayerNames = ({
  size,
  hover,
}: {
  size: string;
  hover: string;
}) => {
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
          opacity: 0.5,
        }
      : {};

  return (
    <div
      style={{
        ...size_0,
        ...hover_0,
      }}
      className={styles.buttonDifferentLayerNames0}
    >
      <p className={styles.buttonDifferentLayerNames1}>Button</p>
    </div>
  );
};
