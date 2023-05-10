import styles from "./Button.module.css";

export const Button = ({ size, hover }: { size: string; hover: string }) => {
  const size_0 =
    size === "Small"
      ? {
          paddingLeft: "10px",
        }
      : {
          paddingLeft: "15px",
        };
  const size_1 =
    size === "Small"
      ? {
          paddingRight: "10px",
        }
      : {
          paddingRight: "15px",
        };
  const size_2 =
    size === "Small"
      ? {
          paddingTop: "5px",
        }
      : {
          paddingTop: "10px",
        };
  const size_3 =
    size === "Small"
      ? {
          paddingBottom: "5px",
        }
      : {
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
        paddingLeft: size_0,
        paddingRight: size_1,
        paddingTop: size_2,
        paddingBottom: size_3,
        opacity: hover_0,
      }}
      className={styles.button0}
    >
      <p className={styles.button1}>Button</p>
    </div>
  );
};
