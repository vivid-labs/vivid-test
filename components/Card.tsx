import styles from "./Card.module.css";
import sunImage from "./sunImage.svg";
import sun from "./sun.svg";
export const Card = ({
  override,
  mode,
}: {
  override?: React.CSSProperties;
  mode: string;
}) => {
  const titleMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const bodyTextMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const themeMode =
    mode === "Dark"
      ? {
          color: "rgb(255, 255, 255)",
        }
      : {
          color: "rgb(0, 0, 0)",
        };
  const buttonTextMode =
    mode === "Dark"
      ? {
          color: "rgb(0, 0, 0)",
        }
      : {
          color: "rgb(255, 255, 255)",
        };
  const buttonMode =
    mode === "Dark"
      ? {
          backgroundColor: "rgb(255, 255, 255)",
        }
      : {
          backgroundColor: "rgb(7, 14, 19)",
        };
  const cardMode =
    mode === "Dark"
      ? {
          backgroundColor: "rgb(7, 14, 19)",
        }
      : {
          backgroundColor: "rgb(255, 255, 255)",
        };
  let sunSrc;
  if (mode === "Light") {
    sunSrc = sunImage;
  } else {
    sunSrc = sun;
  }
  return (
    <div
      className={styles.cardComponent}
      style={{
        ...cardMode,
        ...override,
      }}
    >
      <div className={styles.header}>
        <p
          className={styles.title}
          style={{
            ...titleMode,
          }}
        >
          Trends
        </p>
        <img className={styles.sun} src={sunSrc.src} />
      </div>
      <div className={styles.body}>
        <p
          className={styles.bodyText}
          style={{
            ...bodyTextMode,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun...
        </p>
      </div>
      <div className={styles.footer}>
        <p
          className={styles.theme}
          style={{
            ...themeMode,
          }}
        >
          Theme
        </p>
        <div
          className={styles.button}
          style={{
            ...buttonMode,
          }}
        >
          <p
            className={styles.buttonText}
            style={{
              ...buttonTextMode,
            }}
          >
            Click me!
          </p>
        </div>
      </div>
    </div>
  );
};
